import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'

const items ={
      id: 1,
      img: 'https://www.penguinlibros.com/ar/1519312-thickbox_default/morir-lo-necesario.jpg',
      name: 'Morir lo necesario',
      autor: 'Alejandro G. Roemmers',
      genero: 'Genero: Policial',
      sinopsis: 'El hallazgo de un cadáver en el predio de un barrio privado en construcción es un mal augurio y mala publicidad para sus dueños, pre sionados por hallar al culpable. El detective Luis G. Fernández junto a la oficial Romina Lacase no descansarán hasta llegar a la verdad. Morir lo necesario nos sumerge en un mundo de drogas, corrupción, vínculos nocivos y un drama familiar. Las vidas de Miguel, Facundo y el detective Fernández se verán entrelazadas trágicamente. Con un suspenso vertiginoso y una prosa excepcional, Alejandro G. Roemmers aborda preguntas difíciles sobre la confianza, la amistad, la familia y las consecuencias de las decisiones que tomamos a diario. En estas páginas hilvana una trama moderna y sagaz que cuestiona el origen único de los hechos. El autor nos dice que las responsabilidades siempre son múltiples. Entonces, ¿quién es el verdadero culpable? No siempre es el que aprieta el gatillo.',
      price: 'Precio: 2.200 $ARS'
    }


export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(items)
            }, 3000);
        });

        getData.then(res => setData(res));
    }, [])
    

    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer;
