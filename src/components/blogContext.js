import React, { createContext, useEffect, useState } from 'react';
import { getBlogData } from './Action';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        getBlogData().then(resp => {
            setBlogData(resp?.data)
        })
    },[])
    return (
        <BlogContext.Provider value={blogData}>
            {children}
        </BlogContext.Provider>
    )
}