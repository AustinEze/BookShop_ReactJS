import React from 'react'

export const Item = ({info}) => {
  return (
    <div className="div-books">
        <ul className='books-ul'>
            <li className='book-container-position'>
              <img className='book' src={info.img} />
              <h3 className='book'>{info.name}</h3>
              <p className='book'>{info.autor}</p>
            </li>
        </ul>
    </div>
  )
}

export default Item;