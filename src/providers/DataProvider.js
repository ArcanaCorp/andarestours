'use client';

import { getAgency } from "@/services/agency.service";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

const CACHE_KEY = "agency-cache";
const CACHE_TIME_KEY = "agency-cache-time";

// 10 minutos
const CACHE_DURATION = 1000 * 60 * 10;

const preloadImages = (agency) => {

    if (!agency) return;

    const urls = [];

    // Logo o imagen de la agencia
    if (agency.image) {
        urls.push(agency.image);
    }

    // Solo la portada de cada paquete
    agency.packages?.forEach(pkg => {
        const cover = pkg.package_images?.find(img => img.cover);

        if (cover?.image_url) {
            urls.push(cover.image_url);
        }
    });

    urls.forEach(url => {
        const image = new Image();
        image.src = url;
    });

};

export const DataProvider = ({ children }) => {

    const [agency, setAgency] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadAgency = async () => {

            // -------------------------
            // 1. Leer cache
            // -------------------------

            const cached = localStorage.getItem(CACHE_KEY);
            const cacheTime = localStorage.getItem(CACHE_TIME_KEY);

            if (cached) {

                try {

                    setAgency(JSON.parse(cached));
                    // Ya tenemos datos para renderizar
                    setLoading(false);

                } catch {
                    localStorage.removeItem(CACHE_KEY);
                    localStorage.removeItem(CACHE_TIME_KEY);
                }

            }

            // -------------------------
            // 2. Decidir si revalidar
            // -------------------------

            const isExpired = !cacheTime || Date.now() - Number(cacheTime) > CACHE_DURATION;

            // Si no existe cache o expiró, consultar servidor
            if (!cached || isExpired) {

                try {
                    const data = await getAgency();
                    setAgency(data);
                    preloadImages(data);
                    const newData = JSON.stringify(data);
                    if (localStorage.getItem(CACHE_KEY) !== newData) {
                        localStorage.setItem(CACHE_KEY, newData);
                    }
                    localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }

            } else {

                // -------------------------
                // 3. SWR:
                // usar cache pero actualizar
                // silenciosamente
                // -------------------------

                getAgency()
                    .then(data => {
                        const oldData = JSON.stringify(JSON.parse(cached));
                        const newData = JSON.stringify(data);
                        if (oldData !== newData) {
                            setAgency(data);
                            preloadImages(data);
                            localStorage.setItem(CACHE_KEY, newData);
                            localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
                        } else {
                            // Aunque no cambió la data, asegura que las imágenes
                            // queden calientes en la caché del navegador.
                            preloadImages(JSON.parse(oldData));
                        }
                    })
                    .catch(console.error);

            }

        };

        loadAgency();

    }, []);

    const contextValue = {
        agency,
        loading
    }

    return (
        <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
    );

};

export const useData = () => useContext(DataContext);