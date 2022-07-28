import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const items =[
    {
        id: 1,
        img: 'https://www.penguinlibros.com/ar/1519312-thickbox_default/morir-lo-necesario.jpg',
        name: 'Morir lo necesario',
        autor: 'Alejandro G. Roemmers',
        category: 'Policiales-Oscuros',
        genero: 'Genero: Policiales-Oscuros',
        sinopsis: 'El hallazgo de un cadáver en el predio de un barrio privado en construcción es un mal augurio y mala publicidad para sus dueños, pre sionados por hallar al culpable. El detective Luis G. Fernández junto a la oficial Romina Lacase no descansarán hasta llegar a la verdad. Morir lo necesario nos sumerge en un mundo de drogas, corrupción, vínculos nocivos y un drama familiar. Las vidas de Miguel, Facundo y el detective Fernández se verán entrelazadas trágicamente. Con un suspenso vertiginoso y una prosa excepcional, Alejandro G. Roemmers aborda preguntas difíciles sobre la confianza, la amistad, la familia y las consecuencias de las decisiones que tomamos a diario. En estas páginas hilvana una trama moderna y sagaz que cuestiona el origen único de los hechos. El autor nos dice que las responsabilidades siempre son múltiples. Entonces, ¿quién es el verdadero culpable? No siempre es el que aprieta el gatillo.',
        price: 2200
    },
    {
        id: 2,
        img: 'https://www.penguinlibros.com/ar/910383-thickbox_default/el-toque-de-midas.jpg',
        name: 'El toque de midas',
        autor: 'Donald J. Trump & Robert T. Kiyosaki',
        category: 'Emprendimiento',
        genero: 'Genero: Emprendimiento',
        sinopsis: 'Hay miles de libros de negocios, pero solo éste es para grandes empresarios. Escrito con el empuje de Robert T. Kiyosaki y Donald Trump, dos de los emprendedores más reconocidos del mundo de los negocios.¿Qué esperas para alcanzar tu cima financiera?Pregunta: ¿Cuál es el trabajo más importante del empresario? \n Respuesta: Crear empleos estables y de alta calidad.En un mundo afectado por una economía incierta y enorme desempleo, ¿quién no desea soluciones efectivas que aceleren el restablecimiento? El Estado no tiene la capacidad de crear empleos reales. Existe solo un grupo de personas que puede ayudar a recuperar la prosperidad del mundo: los empresarios; particularmente aquellos con El toque de Midas: empresarios audaces, emprendedores e irreverentes, como se describen en este libro magistral. Los que crean el mayor número de empleos, que brindan mayor prosperidad a un mayor número de gente, son los que más ganan.Así que si deseas empezar tu propio negocio, o si tienes uno y quieres hacerlo crecer, antes de que pierdas más tiempo -¡y más dinero!-, ocúpate de ti mismo, de tu familia y del mundo; descubre y domina con estas páginas los cinco puntos de Eltoque de Midas: \n1. Fuerza de carácter. \n2. Enfoque. \n3. Marca. \n4. Relaciones. \n5. Los pequeños detalles que cuentan.Un libro imprescindible para todos los emprendedores que quieren comenzar un negocio o ver el suyo crecer. Aquí encontrarán los secretos para poder alcanzar el éxito financiero en un mundo de alta competencia y convertir sus ideas en oro.Comentarios del prologuista:«Convertirse en un empresario de éxito no es un esfuerzo de muchos ni puede lograrse en grupo. Se necesita un enfoque individual. Las historias de Donald y de Robert explican cómo se convirtieron en lo que son ahora y cómo llegan siempre a donde se proponen.»\nMark Burnett, creador de The Apprentice',
        price: 2800
    },
    {
        id: 3,
        img: 'https://www.penguinlibros.com/ar/1384314-thickbox_default/un-asunto-pendiente.jpg',
        name: 'Un asunto pendiente',
        autor: 'John Katzenbach',
        category: 'Policiales-Oscuros',
        genero: 'Genero: Policiales-Oscuros',
        sinopsis: 'Megan y Duncan Richards han recorrido un largo camino desde 1968 y su pasado radical. Él trabaja en un banco; ella en el sector inmobiliario. Tienen dos hijas adolescentes y un hijo pequeño. Pero el pasado no los ha olvidado.\nDesde su celda de la prisión, la bella y despiadada terrorista Tanya, con quien los Richards estuvieron implicados en 1968, planea vengarse de la pareja, a la que culpa de su captura. Pronto saldrá de la cárcel.\nY comenzará a resolver un asunto pendiente, comenzando por el hijo de los Richards...',
        price: 1850    
    }

]
      
    
export const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { detalleId } = useParams();
    useEffect(() =>{
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(items)
            }, 3000);
        });

        getData.then(res => setData(res.find(items => items.id === parseInt(detalleId))));
    }, [])
    

    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer;
