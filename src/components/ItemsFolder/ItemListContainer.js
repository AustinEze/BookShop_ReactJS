import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const items =[
  // ITEMS
  {
    id: 1,
    img: 'https://www.penguinlibros.com/ar/1519312-thickbox_default/morir-lo-necesario.jpg',
    name: 'Morir lo necesario',
    autor: 'Alejandro G. Roemmers',
    category: 'Policiales-Oscuros'
  },
  {
    id: 2,
    img: 'https://www.penguinlibros.com/ar/910383-thickbox_default/el-toque-de-midas.jpg',
    name: 'El toque de midas',
    autor: 'Donald J. Trump & Robert T. Kiyosaki',
    category: 'Emprendimiento',
  },
  {
    id: 3,
    img: 'https://www.penguinlibros.com/ar/1384314-thickbox_default/un-asunto-pendiente.jpg',
    name: 'Un asunto pendiente',
    autor: 'John Katzenbach',
    category: 'Policiales-Oscuros'
  }
]

export const ItemListContainer = () => {
  
  const [data, setData] = useState([]);

  const {categoriaId} = useParams(); 

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() =>{
        resolve (items)
      }, 3000) 
    });
    if(categoriaId){
      getData.then(res => setData(res.filter(items => items.category === categoriaId)));
    } 
    else{
      getData.then(res => setData(res))
    }
  }, [categoriaId])


  
  return (
    <div>
      <div>
        <ItemList className='book-1' data={data} />
      </div>
    </div>
  )
}

export default ItemListContainer;