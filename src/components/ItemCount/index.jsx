/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react'
import './style.css'

// eslint-disable-next-line react/prop-types
export const ItemCount = ({ stock, value, onChange }) => {
  const [contador, setContador] = useState(value)

  const onAdd = () => {
    if (contador < stock) {
      setContador(contador + 1)
    } else {
      alert('No tenemos mas stock!!!')
    }
  }

  const onSubstract = () => {
    if (contador > 1) {
      setContador(contador - 1)
    } else {
      alert('El valor es menor a lo que podemos vender')
    }
  }

  useEffect(() => {
    onChange(contador)
  }, [contador, onChange])

  return (
    <>
      <button type="button"
        className='btn btn-primary'
        onClick={onSubstract}
        disabled={contador === 1}>
        -
      </button>
      <b className='contador'>{contador}</b>
      <button type="button"
        className='btn btn-primary'
        onClick={() => {
          onAdd()
        }}
        disabled={contador === stock}>
        +
      </button>
    </>
  )
}
