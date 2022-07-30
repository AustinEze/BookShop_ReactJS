import React, {useState} from 'react'
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from "../CartContext";


export const ItemDetail = ({ data }) => {
  const addProduct = useCartContext
  
  
  const [goToCart, setGoToCart] = useState(false)
  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(data, quantity)
  }
  
  return (
    <div className='item-detail-container'>
        <div className='detail-content1'>
            <div className='detail-img-container'>
              <img className='detail-img' src={data.img} alt='' />
            </div>
            <div className='detail-content2'>
              <h1 className='detail-h1'>{data.name}</h1>
              <h3 className='detail-h3'>{data.autor}</h3>
              <p className='detail-pr'>{data.price}</p>
              {
                goToCart
                ? <Link className='GoToCart' to='/cart'>Confirmar e ir al pago</Link>
                : <ItemCount className='detail-itemcount' initial={0} stock={10} onAdd={onAdd} />
              }
              
            </div> 
        </div>
        <div className='detail-content3-center'>
          <div className='detail-content3'>
            <h4 className='detail-h4'>{data.genero}</h4>
            <p className='detail-p'>{data.sinopsis}</p>
          </div>
        </div>

    </div>
  )
}

export default ItemDetail;