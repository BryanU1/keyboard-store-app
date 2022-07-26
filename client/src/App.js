import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Build from './components/Build';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const items = [
    {
      id: 1,
      name: "Logitech K371",
      imgURL: "asdfadfa.com"
    },
    {
      id: 2,
      name: "Razor",
      imgURL: "asdfasdf.com"
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
          <Route path="/build" exact element={<Build />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
