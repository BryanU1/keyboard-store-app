function Cart(prop) {
  const closeCart = () => {
    prop.setDisplay(false);
  }

  const handleChange = (e) => {
    const arr = JSON.parse(localStorage.getItem('cart'));
    for (const item of arr) {
      if (item.name === e.target.dataset.name) {
        item.quantity = Number(e.target.value);
      }
    }
    prop.setCart(arr);
  }

  const removeItem = (e) => {
    const arr = prop.cart.filter(item => {
      return item.name !== e.target.dataset.name;
    })
    console.log(arr);
    prop.setCart(arr);
  }

  const cartList = prop.cart.map((item) => 
    <li className='cart-item'>
      <img src={item.imgUrl} className='cart-img'></img>
      <p>{item.name}</p>
      <p>${item.price}</p>
      <label htmlFor='quantity'>Quantity</label>
      <input type='number' defaultValue={item.quantity} min='0' max='100' id='quantity' onChange={handleChange} data-name={item.name}></input>
      <button className='remove-btn' onClick={removeItem} data-name={item.name}>&times;</button>
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
        <button className='checkout-btn' onClick={handleCheckout}>Proceed to checkout</button>
        <p>Total Price: {prop.totalPrice}</p>
      </div>
    </div>
  )
}

export default Cart;