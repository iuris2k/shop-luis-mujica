/* eslint-disable import/named */
/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {CartProvider} from './context/CartContext'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './containers/ItemListContainer'
import Footer from './components/Footer'
import ItemDetailContainer from './containers/ItemDetailContainer'
// import CartContainer from './containers/CartContainer'
import { Cart } from './components/Cart/cart'
import './App.css'
import Demo from './HeroSection'

function App() {
  return (
    <CartProvider>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Demo />
              <ItemListContainer />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
            <Route path='/Category/:categoryId'>
              <ItemListContainer />
            </Route>
            <Route path='/Item/:itemId'>
              <ItemDetailContainer />
            </Route>
            <Route path='*' children={<div>Not found</div>} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  )
}

export default App
