import { Link } from 'react-router-dom'

function Shop(props) {
  const item = props.products.map((item) => (
    <li key={item.id}>
      <Link to={`/shop/${item.id}`}>
        <h1>
          {item.name}
        </h1>
        <img src={item.imgURL} alt="keyboard"></img>
      </Link>
    </li>
  ));
  return (
    <ul>
      {item}
    </ul>
  );
}

export default Shop;