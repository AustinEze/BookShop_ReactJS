import React from 'react'
import { useCartContext } from './CartContext'

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className="ItemCart-container">
            {/* <img src={product.image} alt={product.title}) /> */}
            <img src={product.img} alt={product.title} ></img>
            <div>
                <p>Título: {product.title} </p>
                <p>Cantidad: {product.quantity} </p>
                <p>Precio u.: {product.price} </p>
                <p>Subtotal: ${product.quantity * product.price} </p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>

            </div>
        </div>
    ) 
}

export default ItemCart