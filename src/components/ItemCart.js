import React from 'react'
import { useCartContext } from './CartContext'

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='CartProduct-position-container'>
            <div className="ItemCart-container">
                <div className="CartProduct-img-container">
                    <img className='CartProduct-img' src={product.img} alt={product.title} ></img>
                </div>

                <div className='cart-info-container'>
                    <p>Título: {product.name} </p>
                    <p>Cantidad: {product.quantity} </p>
                    <p>Precio u.: {product.price} </p>
                    <p>Subtotal: ${product.quantity * product.price} </p>
                    <button className='removeProduct-button' onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>
        </div>
        
    ) 
}

export default ItemCart