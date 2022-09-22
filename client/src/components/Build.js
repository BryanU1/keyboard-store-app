import { useState, useEffect } from 'react';
import NotSelected from './NotSelected';
import Selected from './Selected';

function Build() {
  if (localStorage.getItem('inventory') === null) {
    const obj = {
      case: {},
      plate: {},
      pcb: {},
      stabilizers: {},
      switches: {},
      keycaps: {}
    }

    localStorage.setItem('inventory', JSON.stringify(obj));
  }

  const inventoryObj = JSON.parse(localStorage.getItem('inventory'));
  const [ inventory, setInventory ] = useState(inventoryObj);

  useEffect(() => {
    localStorage.setItem('inventory', JSON.stringify(inventory));
  }, [inventory]);
    
  useEffect(() => {
    const url = 'http://localhost:5000/api/categories';

    fetch(url)
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('categories', JSON.stringify(json));
        setInventory(JSON.parse(localStorage.getItem('inventory')));
      })
      .catch((err) => console.log(err));
  }, [])

  const addToCart = () => {
    console.log(inventory);
  }

  const categories = JSON.parse(localStorage.getItem('categories'));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Categories</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {inventory.case.selected
            ? <Selected item={inventory.case} setInventory={setInventory}/>
            : <NotSelected category={
              categories.find(el => el.name === 'Case')
            } />
          }
          {inventory.plate.selected
            ? <Selected item={inventory.plate} />
            : <NotSelected category={
              categories.find(el => el.name === 'Plate')
            } />
          }
          {inventory.pcb.selected
            ? <Selected item={inventory.pcb} />
            : <NotSelected category={
              categories.find(el => el.name === 'PCB')
            } />
          }
          {inventory.stabilizers.selected
            ? <Selected item={inventory.stabilizers} />
            : <NotSelected category={
              categories.find(el => el.name === 'Stabilizers')
            } />
          }
          {inventory.switches.selected
            ? <Selected item={inventory.switches} />
            : <NotSelected category={
              categories.find(el => el.name === 'Switches')
            } />
          }
          {inventory.keycaps.selected
            ? <Selected item={inventory.keycaps} />
            : <NotSelected category={
              categories.find(el => el.name === 'Keycaps')
            } />
          }
        </tbody>
      </table>
      <button onClick={addToCart}>Add To Cart</button>
    </div>
  );
}

export default Build;