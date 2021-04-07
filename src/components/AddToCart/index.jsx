/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/*
 * Copyright (c) 2021.  By LM - All rights reserved.
 */

import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import SaveIcon from '@material-ui/icons/Save'
import {ItemCount} from '../ItemCount'
import '../Item/card.css'

export function AddToCart({product}) {
  const [contador, setContador] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  function addToCart() {
    setIsAdded(true)
    // alert("Agregamos " + contador + " " + product.name + " al carrito");
  }

  function counterChangeHandler(val) {
    setContador(val)
  }

  return (
    <div>
      <ItemCount
        stock={product?.stock || 0}
        value={contador}
        onChange={counterChangeHandler}
      />
      {!isAdded && (
        <div className='card text-center bg-dark animate__animated animate__fadeInUp mt-2 p-2'>
          <div className='overflow'>
            {/* <Button variant='contained' color='primary' onClick={addToCart}> */}
            <Button
              variant="contained"
              color="primary"
              endIcon={<Icon>send</Icon>}
              onClick={addToCart}
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      )}
      {isAdded && (
        <div className='card text-center bg-dark animate__animated animate__fadeInUp mt-2 p-2'>
          <div className='overflow'>
            <NavLink to='/cart' className='navbar-brand'>
              <Button
                variant="contained"
                color="primary"
                size="small"
                endIcon={<SaveIcon />}
              >
                Terminar mi compra
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  )
}
