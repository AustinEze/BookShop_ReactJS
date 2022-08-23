import React from 'react'
import Item from './Item';

const ItemList = ({data = {}}) => {
  return(
    <ul className='ItemList-row'>
      {data.map((item => <Item key={item.id} info={item}  />))}

    </ul>
  )
}

export default ItemList;