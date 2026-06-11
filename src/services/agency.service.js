import { PAGE_KEY } from "@/config";
import { supabase } from "@/libs/supabase";

export const getAgency = async () => {
    try {
        const { data, error } = await supabase
            .from('agencies')
            .select(`
                *,
                packages(
                    *,
                    package_images (
                        *
                    )
                )
            `)
            .eq('id', PAGE_KEY)
        
        if (error) throw error;
        return data[0];

    } catch (error) {
        console.error(error);
    }
}