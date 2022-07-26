function Shop(props) {
  return (
    <div>
      {props.products.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </div>
  );
}

export default Shop;