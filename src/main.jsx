import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Display from './Display.jsx'
import Counter from './Counter.jsx'
import CounterProvider from './context.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <Counter/>
    <Display/>
  </CounterProvider>
)
