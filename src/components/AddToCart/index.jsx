/*
 * Copyright (c) 2021.  By LM - All rights reserved.
 */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ItemCount } from "../ItemCount";

export function AddToCart({ product }) {
  const [contador, setContador] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
	function addToCart() {
    setIsAdded(true);
    //alert("Agregamos " + contador + " " + product.name + " al carrito");
  }

	function counterChangeHandler(val) {
		setContador(val);
	}

	return (
		<div>
			<ItemCount
				stock={product?.stock || 0}
				value={contador}
				onChange={counterChangeHandler}
			/>
			{!isAdded && (
				<div className='section' style={{ paddingBottom: "20px" }}>
					<button className='btn btn-success' onClick={addToCart}>
						<span
							style={{ marginRight: "20px" }}
							className='glyphicon glyphicon-shopping-cart'
							aria-hidden='true'></span>
						Agregar al carro
					</button>
				</div>
			)}
			{isAdded && (
				<div className='section' style={{ paddingBottom: "20px" }}>
					<NavLink to='/cart' className='navbar-brand'>
						<button className='btn btn-success'>
							<span
								style={{ marginRight: "20px" }}
								className='glyphicon glyphicon-shopping-cart'
								aria-hidden='true'></span>
							Terminar mi compra
						</button>
					</NavLink>
				</div>
			)}
		</div>
	);
}
