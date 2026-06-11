import { PAGE_KEY } from "@/config";
import { supabase } from "@/libs/supabase";

export const booking = async (payload) => {
    
    try {

        const { data: client, errorClient } = await supabase
            .from('clients')
            .insert([
                {
                    agency_id: PAGE_KEY,
                    name: payload.name,
                    phone: payload.phone,
                    source: 'web',
                    status: 'new'
                }
            ])
            .select()
            .single()

        if (errorClient) throw errorClient;
        
        const { error } = await supabase
            .from('bookings')
            .insert({
                agency_id: PAGE_KEY,
                client_id: client.id,
                package_id: payload.package,
                travel_date: payload.date,
                pax: payload.pax,
                total: payload.total,
                status: 'pending',
                source_booking: 'web'
            })
            .select()
            .single()

        if (error) throw error;

        return true;

    } catch (error) {
        console.error(error);
        return false;
    }

}