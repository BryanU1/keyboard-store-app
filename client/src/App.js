import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Build from './components/Build';
import ItemDetail from './components/ItemDetail';
import CategoryDetail from './components/CategoryDetail';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [ cart, setCart ] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [ display, setDisplay ] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav setDisplay={setDisplay}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/shop"
            exact 
            element={<Shop />} 
          />
          <Route 
            path="/shop/:id" 
            element={<ItemDetail setCart={setCart} cart={cart} />} 
          />
          <Route 
            path="/build" 
            exact 
            element={<Build setCart={setCart} cart={cart} />} 
          />
          <Route 
            path="/catalog/category/:id"
            element={<CategoryDetail />}
          />
        </Routes>

        <Cart display={display} setDisplay={setDisplay} />
      </div>
    </Router>
  );
}

export default App;
