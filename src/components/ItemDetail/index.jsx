import React from "react";
//import {ItemCount} from "../ItemCount";
//import {Link} from "react-router-dom";

export default function ItemDetail({ item }) {
  return (
    <>
      <img src={item?.img} alt="" />
      <h2>{item?.title}</h2>
      <p>{item?.description}</p>
      <div>${item?.price}</div>
    </>
  );
}
