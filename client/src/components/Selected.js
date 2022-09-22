function Selected(prop) {
  const removeItem = (e) => {
    const inventory = JSON.parse(localStorage.getItem('inventory'));


    switch (e.target.dataset.category) {
      case 'Case':
        inventory.case.selected = false;
        break;
    }

    prop.setInventory(inventory)
  }
  return (
    <tr>
      <td>{prop.item.category}</td>
      <td>
        <img src={prop.item.imgUrl} alt={prop.item.category}>
        </img>
      </td>
      <td>{prop.item.name}</td>
      <td>${prop.item.price}</td>
      <td>
        <button 
          data-category={prop.item.category} 
          onClick={removeItem}>
            remove
        </button>
      </td>
    </tr>
  )
}

export default Selected;