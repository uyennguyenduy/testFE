import { PRODUCTS } from '../shared/productsList';

export function ProductsComp() {
  return(
    <div>
      {PRODUCTS.map(item => <RenderItem key={item.id} item={item}/>)}
      <div>SEE MORE</div>
    </div>
  )
};
function RenderItem({item}) {
  return (
    <div>
      <img src={item.image} alt="item.name" width="100"/>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div>{item.rating}</div>
    </div>
  )
}