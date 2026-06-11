import { PAGE_KEY } from "@/config";
import { supabase } from "@/libs/supabase";

export const sendMessage = async (payload) => {
    try {
        
        const form = {
            agency_id: PAGE_KEY,
            ...payload
        }

        const { error } = await supabase
            .from('contact_landing')
            .insert(form)
            .select()
            .single()
        if (error) throw error;
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}