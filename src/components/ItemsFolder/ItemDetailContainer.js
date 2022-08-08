
import React, {useState, useEffect} from 'react';
import {doc, getDoc, collection} from 'firebase/firestore'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config'
      
    
const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const { detalleId } = useParams();

	useEffect(() => {
		const queryCollection = collection(db, "Books");
		const queryDoc = doc(queryCollection, detalleId);
		getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
	}, [detalleId]);
    

    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer;
