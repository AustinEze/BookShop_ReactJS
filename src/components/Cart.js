import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { useCartContext } from './CartContext'
import { Link } from 'react-router-dom'
import ItemCart from './ItemCart'


const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: 'Agustín',
      email: 'Agus@gmail.com',
      phone: '23123134',
      adress: 'sadasasd'
    },
    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
      .then(({id}) => console.log(id))
  }


  if (cart.length === 0){
    return(
      <>
        <p>No hay elementos en el carrito.</p>
        <Link to='/'>Hacer compras</Link>
      </>
    )
  }
  

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p className='total-cart'>
        Total: $ { totalPrice() }
      </p>
      <button className='' onClick={handleClick}>Emitir compra</button>
      <p className='total-cart-nota'>Nota: puede seguir comprando si regresa a "home" o "categorias", sus productos en el carrito quedarán guardados.</p>
    </>
  )
}

export default Cart;