import {createContext, useEffect, useState} from 'react';

export const Context = createContext();

const ContextProvider = ({children})=>{
    const [products, setProducts] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);
    

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

    const filtered = (selectedValues) =>{
        let data = products.filter((e) => {
            if(selectedValues.includes(e.color) && selectedValues.includes(e.gender) && selectedValues.includes(e.type) ){
                return e;
            }
            else if(selectedValues.includes(e.color) && selectedValues.includes(e.gender) ){
                return e;
            }
            else if(selectedValues.includes(e.color) ){
                return e;
            }
            else if(selectedValues.includes(e.gender)){
                return e;
            }
            else if(selectedValues.includes(e.type)){
                return e;
            }
            else if(selectedValues.includes("250")){
                return e.price<=250
            }
            else if(selectedValues.includes("251")){
                return (e.price>=251 && e.price<=450)
            }
            else if(selectedValues.includes("450")){
                return  e.price>=450
            }
            return "";
        })
        setFilteredProduct(data)
    }

    return <Context.Provider value={{products,cartProduct,addToCart,filtered,filteredProduct}}>{children}</Context.Provider>
}

export default ContextProvider; 