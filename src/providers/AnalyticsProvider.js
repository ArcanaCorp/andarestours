'use client';

import { PAGE_KEY } from '@/config';
import { getDeviceId } from '@/helpers/deviceId';
import { supabase } from '@/libs/supabase';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children }) => {

    const [viewId, setViewId] = useState(null);

    const startTime = useRef(Date.now());

    useEffect(() => {

        let mounted = true;

        const registerVisit = async () => {

            const { data, error } =
                await supabase
                    .from('landing_views')
                    .insert({
                        agency_id: PAGE_KEY,
                        device_id: getDeviceId(),
                        user_agent: navigator.userAgent,
                        referrer: document.referrer || null
                    })
                    .select()
                    .single();

            if (!error && mounted) {
                setViewId(data.id);
            }
        };

        registerVisit();

        return () => {
            mounted = false;
        };

    }, [PAGE_KEY]);

    useEffect(() => {

        const updateStayTime = async () => {
            
            if (!viewId) return;
            const staySeconds = Math.floor((Date.now() - startTime.current) / 1000);
            await supabase
                .from(
                    'landing_views'
                )
                .update({
                    stay_seconds: staySeconds
                })
                .eq('id', viewId);
        };

        const handleHide = () => {
            updateStayTime();
        };

        window.addEventListener('beforeunload', handleHide);

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                handleHide();
            }
        });

        return () => {
            handleHide();
            window.removeEventListener('beforeunload', handleHide);
        };

    }, [viewId]);

    const trackWhatsapp = async () => {
        if (!viewId) return;
        await supabase
            .from(
                'landing_views'
            )
            .update({
                whatsapp_click: true
            })
            .eq('id', viewId);
    };

    const trackForm = async () => {

        if (!viewId) return;

        await supabase
            .from(
                'landing_views'
            )
            .update({
                form_submit: true
            })
            .eq('id', viewId);
    };

    const trackPhone = async () => {
        if (!viewId) return;
        await supabase
            .from(
                'landing_views'
            )
            .update({
                phone_click: true
            })
            .eq('id', viewId);
    };

    const contextValue = {
        viewId,
        trackWhatsapp,
        trackForm,
        trackPhone
    }

    return (
        <AnalyticsContext.Provider value={contextValue}>{children}</AnalyticsContext.Provider>
    );

};

export const useAnalytics = () => useContext(AnalyticsContext);