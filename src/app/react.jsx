import React from 'react'
import ReactDOM from 'react-dom'
import App from './compoents/counter'

const MainScreen = () => <div className="alert">
  <h3>計數器</h3>
  <App />
</div>
const rootElement = document.getElementById('root')
ReactDOM.render(<MainScreen />, rootElement)
