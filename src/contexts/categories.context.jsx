import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utilities/firebase/firebase.utils";

// TEMP CODE TO QUICKLY GET THE PRODUCTS INTO FIREBASE.
// import SHOP_DATA from "../shop-data.js";
// useEffect(() => {
//     addCollectionAndDocuments('categories', SHOP_DATA);
// }, []);

export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => {}
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap }

    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    return (
        <CategoriesContext.Provider value={value}>{ children }</CategoriesContext.Provider>
    );
};