import React, {useEffect, useState} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const items =[
  // ITEMS
  {
    id: 1,
    img: 'https://www.penguinlibros.com/ar/1519312-thickbox_default/morir-lo-necesario.jpg',
    name: 'Morir lo necesario',
    autor: 'Alejandro G. Roemmers'
  },
  {
    id: 2,
    img: 'https://www.penguinlibros.com/ar/910383-thickbox_default/el-toque-de-midas.jpg',
    name: 'El toque de midas',
    autor: 'Donald J. Trump & Robert T. Kiyosaki'
  }
]



export const ItemListContainer = () => {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() =>{
        resolve (items)
      }, 3000) 
    });
    getData.then(res => setData(res))
  }, [])


  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }
  
  return (
    <div>
      <div>
        <ItemCount initial={0} stock={10} onAdd={onAdd} />
      </div>
      <div>
        <ItemList className='book-1' data={data} />
      </div>
    </div>
  )
}

export default ItemListContainer;