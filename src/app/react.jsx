import React from 'react'
import ReactDOM from 'react-dom'
import App from './compoents/counter'
import Block from './compoents/block'

const MainScreen = () => <div className="alert">
  <h3>計數器</h3>
  <App />
</div>

const MainScreen2 = () => <Block />

const rootElement = document.getElementById('root')
ReactDOM.render(<MainScreen />, rootElement)
const rootElement2 = document.getElementById('root2')
ReactDOM.render(<MainScreen2 />, rootElement2)
