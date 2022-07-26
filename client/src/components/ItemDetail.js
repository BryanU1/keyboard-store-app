import { useParams } from 'react-router-dom';

function ItemDetail() {
  const params = useParams();
  return (
    <div>
      ProductID is {params.id}
    </div>
  )
}

export default ItemDetail;