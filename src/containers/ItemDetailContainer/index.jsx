// simular el tomar un producto a través de una API

import React, { useEffect, useState } from "react";

// const ItemDetailContainer = (props) => {
// useEffect(() => {
//   setTimeout(() => {
// new Promise ()

//   },3000)
// return () => {}
// },[])

// export default ItemDetailContainer

import ItemDetail from "../../components/ItemDetail";

const getItems = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				title: "Samsung Galaxy S21 Ultra",
				price: 178000,
				description: "El mejor celular del año ",
				img: "../../img/phone.svg",
			});
		}, 2000);
	});
};
export default function ItemDetailContainer() {
	const [item, setItem] = useState(null);
	useEffect(() => {
		getItems().then((res) => setItem(res));
		return;
	}, []);
	return <ItemDetail item={item} />;
}
