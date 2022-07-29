import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { CartContext } from './CartContext'
 

export const CartWidget = () => {
  const { totalProducts } = CartContext();
  return (
    <div className="cart-container">
      <AiOutlineShoppingCart />
      <span>{ totalProducts || '' }</span>
    </div>
  )
}

export default CartWidget;
