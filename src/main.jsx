import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Quotes from "./Component/Quotes/Quotes.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Quotes/>
  </React.StrictMode>,
)
