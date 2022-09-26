function Cart(prop) {
  const closeCart = (e) => {
    prop.setDisplay(false);
  }

  const cartList = prop.cart.map((item) => 
    <li className='cart-item'>
      <img src={item.imgUrl} className='cart-img'></img>
      <p>{item.name}</p>
      <p>${item.price}</p>
    </li>
  )

  const handleCheckout = () => {
    prop.setCart([])
  }

  return (
    <div className={prop.display ? 'modal' : 'modal hidden'}>
      <div className='cart'>
        <span className='close' onClick={closeCart}>
          &times;
        </span>
        <ul className='item-list'>
          {cartList}
        </ul>
        <button onClick={handleCheckout}>Proceed to checkout</button>
      </div>
    </div>
  )
}

export default Cart;