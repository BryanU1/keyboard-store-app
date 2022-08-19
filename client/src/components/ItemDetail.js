import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ItemDetail() {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/api/item/${params.id}`;
    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        const obj = JSON.parse(text);
        setData(obj);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <h1>{data.name}</h1>
      <p>${data.price}</p>
      <img src={data.imgUrl} alt='keyboard'></img>
    </div>
  )
}

export default ItemDetail;