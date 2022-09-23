import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <div>
        <ul>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/build">
            <li>Build</li>
          </Link>
        </ul>
        <i className='fas fa-shopping-cart'></i>
      </div>
    </nav>
  );
}

export default Nav;