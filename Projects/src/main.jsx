import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Gobalstate from './Components/Foodrecipe/Context/index.jsx'
import Gobalcart from './Components/Shopingcart/Context/index.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
   <Gobalstate>
   {/* <Gobalcart> */}
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </BrowserRouter>
   {/* </Gobalcart> */}
    </Gobalstate>
)
