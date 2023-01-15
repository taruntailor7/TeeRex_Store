import React, { useContext } from 'react'
import { Context } from '../../components/Context/ContextProvider';
import "./Cart.css"
export const Cart = () => {
  const {cartProduct} = useContext(Context);
  return (
    <div className="cartDiv">
      <h2>Shopping Cart</h2>
      {
       cartProduct.map((el)=>{
       return (
        <div className="allcart" key={el.id}>
        <div><img  src={el.imageURL} alt="" id='cartImage' /></div>
        <div>
          <p id='productname'>{el.name}</p>
          <p id='productprice'>Rs  {el.price}</p>
    
        </div>
        <div>
          <select>

            <option value="">Qty 1</option>
            <option value="">Qty 2</option>
            <option value="">Qty 3</option>
            <option value="">Qty 4</option>
            <option value="">Qty 5</option>
            <option value="">Qty 6</option>
            <option value="">Qty 7</option>
            <option value="">Qty 8</option>
            <option value="">Qty 9</option>
            <option value="">Qty 10</option>
          </select>
        </div>
        <div><button id='btn'>Delete</button></div>
      </div>
       )
       })
      }
    </div>
  )
}
