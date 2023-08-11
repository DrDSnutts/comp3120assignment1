import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App(){
  const [products, setProducts] = useState([ ])
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])

  console.log()

  useEffect(() => {
    // Fetch products from the server
    axios.get('http://localhost:3001/products')
      .then(response => setProducts(response.data))
    
    // Fetch user's orders
    axios.get('http://localhost:3001/orders?user_id=1')
      .then(response => setOrders(response.data))
  }, []);

  

  return (
    <div className="products">
      {products.map(product => (
        <div key={product.id} className="product">
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
