import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import {ItemListContainer} from './ItemListContainer'
export const CartWidget = () => {
  return (
    <div>
      <div className="cart-container">
        <AiOutlineShoppingCart />
        <ItemListContainer />
      </div>
    </div>
  )
}
