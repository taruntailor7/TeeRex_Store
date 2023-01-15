import {createContext, useEffect, useState} from 'react';

export const Context = createContext();

const ContextProvider = ({children})=>{
    const [products, setProducts] = useState([]);
    const [cartProduct, setCartProduct] = useState([])

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = () => {
        fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
        .then((res)=>res.json())
        .then((res)=>setProducts(res));
    }

    const addToCart = (product) =>{
        setCartProduct([...cartProduct,product])
    }

    return <Context.Provider value={{products,cartProduct,addToCart}}>{children}</Context.Provider>
}

export default ContextProvider; 