import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App(){
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])
  const [user, setUser] = ({id:1})
}

export default App;
