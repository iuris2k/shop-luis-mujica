// simular el tomar un producto a través de una API

import React, { useEffect, useState } from "react";

import ItemDetail from "../../components/ItemDetail";

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Samsung Galaxy S21 Ultra",
        price: 178000,
        description: "El mejor celular del año ",
        img: "",
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
