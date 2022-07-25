import React from 'react';
import { useState } from 'react';


const ItemCount = ({initial, stock, onAdd}) => {    
        
    const [count, setCount] = useState(initial)
    
    const add = () => {         //Funcion del boton ADD y luego se agrega abajo

        if(count < stock){
            setCount(count + 1);
        }
    }
    const subtract = () => {         //Funcion del boton SUBTRACT y luego se agrega abajo
        if(count > initial){
            setCount(count - 1);
        }
    }

  return (
    <div>
        <div className='Itemcount-position'>
            <div className='Itemcount-background'>
                <div className="Itemcount-container">
                    <button className="count-item" onClick = { subtract } >-</button>
                    <p className="count-item"> { count } </p>
                    <button className="count-item" onClick= { add } >+</button>
                </div>
                <button className='Itemcount-add' onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>    
        </div>
        
    </div>
  )
}    

export default ItemCount;
