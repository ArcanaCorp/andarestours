'use client';

import { getAgency } from "@/services/agency.service";
import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [ agency, setAgency ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const getInfo = async () => {
            try {
                if (!agency) {
                    const data = await getAgency();
                    setAgency(data)
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        getInfo();
    }, [])

    const contextValue = {
        agency,
        loading
    }

    return (
        <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
    )

}

export const useData = () => useContext(DataContext);