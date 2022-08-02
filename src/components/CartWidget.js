import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useCartContext } from './CartContext'
 

export const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <div className="cart-container">
      <AiOutlineShoppingCart />
      <span>{ totalProducts() || '' }</span>
    </div>
  )
}

export default CartWidget;
