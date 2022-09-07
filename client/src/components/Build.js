import { useEffect } from 'react';
import NotSelected from './NotSelected';
import Selected from './Selected';

function Build(prop) {
  useEffect(() => {
    const url = 'http://localhost:5000/api/categories';
    
    fetch(url)
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('categories', JSON.stringify(json));
      })
      .catch((err) => console.log(err));
  }, []);

  const categories = localStorage.getItem('categories');
  const categoryList = JSON.parse(categories);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Categories</th>
            <th>Selection</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {prop.inventory.case
            ? <Selected item={prop.inventory.case} />
            : <NotSelected category={
              categoryList.find(el => el.name === 'Case')
            } />
          }
          {prop.inventory.plate
            ? <Selected item={prop.inventory.plate} />
            : <NotSelected category={
              categoryList.find(el => el.name === 'Plate')
            } />
          }
          {prop.inventory.pcb
            ? <Selected item={prop.inventory.pcb} />
            : <NotSelected category={
              categoryList.find(el => el.name === 'PCB')
            } />
          }
          {prop.inventory.stabilizers
            ? <Selected item={prop.inventory.stabilizers} />
            : <NotSelected category={
              categoryList.find(el => el.name === 'Stabilizers')
            } />
          }
          {prop.inventory.switches
            ? <Selected item={prop.inventory.switches} />
            : <NotSelected category={
              categoryList.find(el => el.name === 'Switches')
            } />
          }
          {prop.inventory.keycaps
            ? <Selected item={prop.inventory.keycaps} />
            : <NotSelected category={
              categoryList.find(el => el.name === 'Keycaps')
            } />
          }
        </tbody>
      </table>
      <button>Add To Cart</button>
    </div>
  );
}

export default Build;