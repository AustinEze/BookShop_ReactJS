import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {collection, getDocs, query, where,} from 'firebase/firestore'
import { db } from '../../firebase/config';

export const ItemListContainer = ({}) => {
  
  const [data, setData] = useState([]);

  const {categoriaId} = useParams(); 

	useEffect(() => {
		// const querydb = getFirestore();
		const queryCollection = collection(db, "Books");
		if (categoriaId) {
			const queryFilter = query(
				queryCollection,
				where("category", "==", categoriaId),
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [categoriaId]);

  return (
    <div>
      <div>
        <ItemList className='book-1' data={data} />
      </div>
    </div>
  )
}

export default ItemListContainer;