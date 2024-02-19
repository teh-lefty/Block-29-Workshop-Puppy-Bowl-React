import './index.css' //any styles will happen to all components
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import {store} from './store' 
import { Provider } from "react-redux";
import { BrowserRouter}  from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
