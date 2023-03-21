import React, { createContext, useEffect, useState } from 'react';
import { getfooterData } from './Action';

export const FooterContext = createContext();

export const FooterProvider = ({ children }) => {
    const [footerData, setFooterData] = useState([]);

    useEffect(() => {
        getfooterData().then(resp => {
            setFooterData(resp?.data)
        })
    },[])
    return (
        <FooterContext.Provider value={footerData}>
            {children}
        </FooterContext.Provider>
    )
}