import React, {StrictMode} from 'react'

import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement,
)
