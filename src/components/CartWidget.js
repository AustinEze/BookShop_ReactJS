import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useCartContext } from './CartContext'


const CartWidget = () => {
  const { totalProducts } = useCartContext();
  
  return (
    <div>
      <div className="cart-container">
        <AiOutlineShoppingCart />
        <span> {totalProducts() || ''} </span>

      </div>
    </div>
  )
}

export default CartWidget;
