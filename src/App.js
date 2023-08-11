import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App(){
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])
  const [user, setUser] = ({id:1})

  console.log()

  //fetch products
  useEffect(() => {
    fetch('/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  });

 

  //fetch user orders
  useEffect(() => {
    fetch(`/orders?user_id=${user.id}`)
      .then(response => response.json())
      .then(data => setOrders(data));
  }, [user.id]);

  

  return(
    <div>
      <h1>Test</h1>
    </div>
  )
}

export default App;
