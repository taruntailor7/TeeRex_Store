/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState} from 'react'
import "./Products.css"
import { BsSearch } from 'react-icons/bs'
import { Context } from '../../components/Context/ContextProvider';

export const Products = () => {
  const {products,cartProduct,addToCart,filtered,filteredProduct} = useContext(Context);
  const [selectedData, setSelectedData] = useState([]);
  const data = filteredProduct.length ? filteredProduct : products;

  useEffect(()=>{
    filtered(selectedData);
  },[selectedData])

  const handleAddToCart = (product) => {
    for(let i=0;i<cartProduct.length;i++){
        if(cartProduct[i].id===product.id){
            return true;
        }
    }
    return false;
  }

  const handleCart = (product) =>{
    addToCart(product);
  }


  const handleClick = (e) => {
    let {name,checked} = e.target;
    if(checked){
      setSelectedData([...selectedData,name])
    } else{
      let filteredData = selectedData.filter((elem)=>{
        return elem!==name;
      })
      setSelectedData(filteredData);
    }
  }
  console.log(selectedData,"selected");

  return (
    <>
      <div className="searchBox">
        <div>
          <input placeholder='Search for products...'/>
          <button><BsSearch fontSize="15px"/></button>
        </div>
      </div>
      <div className="productList">
        <div>
          <div onClick={handleClick} className="filters">
            <h2>Color</h2>
            <div>
              <input type="checkbox" name="Red" />
              <label htmlFor="">Red</label>
            </div>
            <div>
              <input type="checkbox" name="Blue"/>
              <label htmlFor="">Blue</label>
            </div>
            <div>
              <input type="checkbox" name="Green"/>
              <label htmlFor="">Green</label>
            </div>
            <h2>Gender</h2>
            <div>
              <input type="checkbox" name="Men"/>
              <label htmlFor="">Men</label>
            </div>
            <div>
              <input type="checkbox" name="Women"/>
              <label htmlFor="">Women</label>
            </div>
            <h2>Price</h2>
            <div>
              <input type="checkbox" name="250"/>
              <label htmlFor="">0 - Rs 250</label>
            </div>
            <div>
              <input type="checkbox" name="251"/>
              <label htmlFor="">Rs 251 - 450</label>
            </div>
            <div>
              <input type="checkbox" name="450"/>
              <label htmlFor="">Rs 450</label>
            </div>
            <h2>Type</h2>
            <div>
              <input type="checkbox" name="Polo"/>
              <label htmlFor="">Polo</label>
            </div>
            <div>
              <input type="checkbox" name="Hoodie"/>
              <label htmlFor="">Hoodie</label>
            </div>
            <div>
              <input type="checkbox" name="Basic"/>
              <label htmlFor="">Basic</label>
            </div>
          </div>
          <div className="products">
            {data.map((product) =>(
              <div key={product.id} className="product">
                <div>
                  <img src={product.imageURL} alt={product.name} className="productImg"/>
                </div>
                <h1>{product.name}</h1>
                <div>
                  <p>Rs {product.price}</p>
                  { handleAddToCart(product) ? <>
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                  </>: <button onClick={()=>handleCart(product)}>Add to cart</button>}
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
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