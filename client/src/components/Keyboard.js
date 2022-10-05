import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Keyboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/api/category/62f4181eb6fa5ce4097d1f21`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setItems(json.items))
      .catch((err) => console.log(err));
    
  }, []);

  const itemList = items.map((item) => (
    <li key={item._id} className='item'>
      <Link to={`/shop/${item._id}`}>
        <img src={item.imgUrl} alt="keyboard"></img>
        <h1>
          {item.name}
        </h1>
        <h2>
          ${item.price}
        </h2>
      </Link>
    </li>
  ));

  return (
    <div className='flex-container-row'>
      <section>
        <ul className='side-nav'>
          <Link to='/shop/keyboard'>
            <li className='selected'>Keyboard</li>
          </Link>
          <Link to='/shop/case'>
            <li>Case</li>
          </Link>
          <Link to='/shop/pcb'>
            <li>PCB</li>
          </Link>
          <Link to='/shop/stabilizers'>
            <li>Stabilizers</li>
          </Link>
          <Link to='/shop/Switches'>
            <li>Switches</li>
          </Link>
          <Link to='/shop/Keycaps'>
            <li>Keycaps</li>
          </Link>
        </ul>
      </section>
      <div className='main-content'>
        <h1 className='header'>Assembled Keyboards</h1>
        <ul className='items-container'>
          {itemList}  
        </ul>
      </div>
    </div>
  );
}

export default Keyboard;