import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ItemDetail(prop) {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/api/item/${params.id}`;
    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        const obj = JSON.parse(text);
        setData(obj);
      })
      .catch(err => console.log(err));
  }, [])

  const handleClick = () => {
    const obj = {
      name: data.name,
      imgUrl: data.imgUrl,
      price: data.price
    }
    prop.setCart(prop.cart.concat(obj));
  }

  return (
    <div>
      <div>
        <h1>{data.name}</h1>
        <p>${data.price}</p>
        <img src={data.imgUrl} alt='keyboard'></img>
      </div>
      <button onClick={handleClick}>Add To Cart</button>
    </div>
    
  )
}

export default ItemDetail;