import { useParams } from 'react-router-dom';
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

  const caption = category.map((value) => (
    <caption key={value._id}>{value.name}</caption>
  ));

  const itemsList = items.map(item => (
    <tr>
      <td>
        <img src={item.imgUrl} alt='Keyboard Case'></img>
      </td>
      <td>{item.name}</td>
      <td>{item.price}</td>
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