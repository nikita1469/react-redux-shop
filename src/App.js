import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'

import { Header } from './components'
import { Home, Cart } from './pages'


const App = () => {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({data}) => {
        setPizzas(data.pizzas)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas}/>} exact/>   
        <Route path="/cart" component={Cart} exact/>  
      </div>
    </div>
  )
}

export default App;
