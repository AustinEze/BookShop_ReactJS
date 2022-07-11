import React from 'react';
import { useState } from 'react';


const ItemCount = ({initial, stock, onAdd}) => {    
        
    const [counter, setCounter] = useState(initial)
    
    const add = () => {         //Funcion del boton ADD y luego se agrega abajo

        if(counter < stock){
            setCounter(counter + 1);
        }
    }
    const subtract = () => {         //Funcion del boton SUBTRACT y luego se agrega abajo
        if(counter > initial){
            setCounter(counter - 1);
        }
    }

  return (
    <div>
        <div className='ItemCounter-position'>
            <div className='ItemCounter-background'>
                <div className="ItemCounter-container">
                    <button className="counter-item" onClick = { subtract } >-</button>
                    <p className="counter-item"> { counter } </p>
                    <button className="counter-item" onClick= { add } >+</button>
                </div>
                <button className='ItemCounter-add' onClick={onAdd}>Agregar al carrito</button>
            </div>
    
        </div>
        
    </div>
  )
}    

export default ItemCount;

// export default ItemCount = () => {

// }


