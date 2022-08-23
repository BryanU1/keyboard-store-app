import { Link } from 'react-router-dom';

function NotSelected(prop) {
  return (
    <tr>
      <td>{prop.category.name}</td>
      <td>
        <Link to={`/catalog/category/${prop.category._id}`} >
          <button>Add {prop.category.name}</button>
        </Link>
      </td>
    </tr>
  )
}

export default NotSelected;