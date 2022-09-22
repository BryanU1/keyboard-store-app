import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

function CategoryDetail() {
  const params = useParams();
  const [ category, setCategory ] = useState([]);
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/api/category/${params.id}`
    
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setCategory(json.category);
        setItems(json.items);
      })
      .catch(err => console.log(err));
  }, [])

  const handleClick = (e) => {
    const obj = {
      category: category[0].name,
      name: e.target.dataset.name,
      imgUrl: e.target.dataset.imgurl,
      price: e.target.dataset.price
    }; 
    const arr = JSON.parse(localStorage.getItem('inventory'));

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].category === category[0].name) {
        arr.splice(i, 1);
      }
    }

    arr.push(obj)
    localStorage.setItem('inventory', JSON.stringify(arr));
  }

  const caption = category.map((value) => (
    <caption key={value._id}>{value.name}</caption>
  ));

  const itemsList = items.map(item => (
    <tr key={item._id}>
      <td>
        <img src={item.imgUrl} alt='Keyboard Case'></img>
      </td>
      <td>{item.name}</td>
      {item.price % 1 == 0
        ? <td>${item.price}.00</td>
        : <td>${item.price}</td>}
      <td>
        <Link to='/build'>
          <button 
            onClick={handleClick}
            data-name={item.name}
            data-imgurl={item.imgUrl}
            data-price={item.price}
          >
            Add
          </button>
        </Link>
      </td>
    </tr>
  ));

  return (
    <div>
      <table>
        {caption}
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {itemsList}
        </tbody>
      </table>
    </div>
  )
}

export default CategoryDetail;