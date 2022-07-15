import React from 'react'

export const ItemDetail = ({ data }) => {
  return (
    <div className='item-detail-container'>
        <div className='detail-container'>
            <img className='detail-img' src={data.img} alt='' />
            <div className='detail-content'>
                <h1>{data.name}</h1>
                <h3>{data.autor}</h3>
                <h4>{data.genero}</h4>
                <p>{data.sinopsis}</p>
                <p>{data.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail;