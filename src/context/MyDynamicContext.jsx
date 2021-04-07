import React from 'react'

export const ContextCart = React.createContext({})

export const MyDynamicContext = ({children}) => {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState(0)

  return <ContextCart.Provider value={(nombre, edad, setNombre)} />
}
