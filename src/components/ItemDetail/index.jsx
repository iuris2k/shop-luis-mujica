import React from "react";
import { AddToCart } from "../AddToCart/";
// import {Link} from "react-router-dom";
import "./itemDetail.css";

export default function ItemDetail({ item }) {
	return (
		<div className='container card'>
			<div className='row'>
				<div className='col-xs-4 item-photo'>
					<img style={{ maxWidth: "250px" }} src={item?.pictureUrl} alt='img' />
				</div>
				<div className='col-xs-5' style={{ border: "0px solid gray" }}>
					{/* <!-- Datos del vendedor y titulo del producto --> */}
					<h3>{item?.name}</h3>

					{/* <!-- Precios --> */}
					<h6 className='title-price'>
						<small>PRECIO OFERTA</small>
					</h6>
					<h3 style={{ marginTop: "0px" }}>${item?.price}</h3>

					<div className='section' style={{ paddingBottom: "20px" }}>
						<h6 className='title-attr'>
							<small>CANTIDAD</small>
						</h6>
						<AddToCart product={item} />
					</div>
				</div>

				<div className='col-xs-9'>
					<ul className='menu-items'>
						<li className='active'>Detalle del producto</li>
					</ul>
					<div style={{ width: "100%", borderTop: "1px solid silver" }}>
						<p style={{ padding: "15px" }}>
							<small>{item?.description}</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
