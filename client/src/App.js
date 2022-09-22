import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Build from './components/Build';
import ItemDetail from './components/ItemDetail';
import CategoryDetail from './components/CategoryDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
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
            element={<Shop />} 
          />
          <Route path="/shop/:id" element={<ItemDetail />} />
          <Route 
            path="/build" 
            exact 
            element={<Build />} 
          />
          <Route 
            path="/catalog/category/:id"
            element={<CategoryDetail />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
