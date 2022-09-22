function Selected(prop) {
  return (
    <tr>
      <td>{prop.item.category}</td>
      <td>
        <img src={prop.item.imgUrl} alt={prop.item.category}>
        </img>
      </td>
      <td>{prop.item.name}</td>
      <td>${prop.item.price}</td>
    </tr>
  )
}

export default Selected;