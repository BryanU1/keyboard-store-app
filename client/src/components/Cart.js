function Cart(prop) {
  const closeCart = (e) => {
    prop.setDisplay(false);
  }

  return (
    <div className={prop.display ? 'modal' : 'modal hidden'}>
      <div className='cart'>
        <span className='close' onClick={closeCart}>&times;</span>
      </div>
    </div>
  )
}

export default Cart;