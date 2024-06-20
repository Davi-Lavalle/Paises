import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Lista from './Lista/Lista.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Lista/>
    <App />
    <Lista/>
  </React.StrictMode>,
)
