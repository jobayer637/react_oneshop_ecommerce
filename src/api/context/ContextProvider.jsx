import React, {createContext, useState} from 'react'

export const rootContext = createContext()

export const ContextProvider = ({children}) => {

    const [auth, setAuth] = useState({
        isAuth: false
    });
    const [cart, setCart] = useState([])
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    return (
       <rootContext.Provider value={{
            oAuth: [auth, setAuth],
            api_cart: [cart, setCart],
            api_categories: [categories, setCategories],
            api_products: [products, setProducts]
       }}>
           {children}
       </rootContext.Provider>
    )
}

