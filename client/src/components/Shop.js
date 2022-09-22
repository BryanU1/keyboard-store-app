import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:5000/api/category/62f4181eb6fa5ce4097d1f21';
    fetch(url)
      .then((res) => res.json())
      .then((json) => setItems(json.items))
      .catch((err) => console.log(err));
    
  }, []);

  const itemList = items.map((item) => (
    <li key={item._id}>
      <Link to={`/shop/${item._id}`}>
        <h1>
          {item.name} - ${item.price}
        </h1>
        <img src={item.imgUrl} alt="keyboard"></img>
      </Link>
    </li>
  ));

  return (
    <ul>
      {itemList}
    </ul>
  );
}

export default Shop;