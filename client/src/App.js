import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Build from './components/Build';
import ItemDetail from './components/ItemDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const items = [
    {
      id: 1,
      name: "Tofu96",
      imgURL: "https://cdn.shopify.com/s/files/1/1473/3902/products/2_37bdcf16-dd9f-416f-8dd7-d94c39395504_460x.jpg?v=1656745194"
    },
    {
      id: 2,
      name: "Tofu65",
      imgURL: "https://cdn.shopify.com/s/files/1/1473/3902/products/8b9cc7c9808a81fc8db0eaf67a4d79d7_3a068836-3c81-495d-83f3-0083f027a5a0_460x.jpg?v=1653290788"
    }
  ]

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/shop"
            exact 
            element={<Shop products={items}/>} 
          />
          <Route path="/shop/:id" element={<ItemDetail />} />
          <Route path="/build" exact element={<Build />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
