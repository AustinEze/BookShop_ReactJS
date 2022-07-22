import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({info}) => {
  return (
    <div className="div-books">
        <Link className='books-ul' to={`/detalle/${info.id}`}>
            <div className='book-container-position'>
              <img className='book' src={info.img} />
              <h3 className='book'>{info.name}</h3>
            </div>
        </Link>
    </div>
  )
}

export default Item;