/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import RemoveIcon from '@material-ui/icons/Remove'
import AddIcon from '@material-ui/icons/Add'


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
      <Button
        variant="contained"
        color="primary"
        onClick={onSubstract}
        disabled={contador === 1}>
        <RemoveIcon/>
      </Button>
      <b className='contador'>{contador}</b>
      <Button
        variant="contained" color="primary"
        onClick={() => {
          onAdd()
        }}
        disabled={ contador === stock }>
        <AddIcon />
      </Button>
    </>
  )
}
