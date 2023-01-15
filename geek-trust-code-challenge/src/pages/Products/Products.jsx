import React, { useState } from 'react'
import { useEffect } from 'react';
import "./Products.css"

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getProducts();
  },[])

  const getProducts = () => {
    fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
    .then((res)=>res.json())
    .then((res)=>setProducts(res));
  }

  return (
    <div className="productList">
      <div>
        <div className="filters">
          filters
        </div>
        <div className="products">
          {products.map((product) =>(
            <div key={product.id} className="product">
              <div>
                <img src={product.imageURL} alt={product.name} className="productImg"/>
              </div>
              <h1>{product.name}</h1>
              <p>{product.price}</p>
              <button>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


// color
// : 
// "Black"
// currency
// : 
// "INR"
// gender
// : 
// "Men"
// id
// : 
// 1
// imageURL
// : 
// "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png"
// name
// : 
// "Black Polo"
// price
// : 
// 250
// quantity
// : 
// 3
// type
// : 
// "Polo"