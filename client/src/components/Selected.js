function Selected(prop) {
  const removeItem = (e) => {
    const inventory = JSON.parse(localStorage.getItem('inventory'));


    switch (e.target.dataset.category) {
      case 'Case':
        inventory.case.selected = false;
        break;
      case 'Plate':
        inventory.plate.selected = false;
        break;
      case 'PCB':
        inventory.pcb.selected = false;
        break;
      case 'Stabilizers':
        inventory.stabilizers.selected = false;
        break;
      case 'Switches':
        inventory.switches.selected = false;
        break;
      case 'Keycaps':
        inventory.keycaps.selected = false;
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
          onClick={removeItem}
        >
            remove
        </button>
      </td>
      <td>
        <button>
          edit
        </button>
      </td>
    </tr>
  )
}

export default Selected;