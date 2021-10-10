import { PRODUCTS } from '../shared/productsList';

export function ProductsComp() {
  return(
    <div className="p-2">
      <div className="d-flex p-2">
        {PRODUCTS.map(item =>
          (
            <RenderItem key={item.id} item={item}/> 
          )
        )}
      </div>
      
      <div className="btn">SEE MORE</div>
    </div>
  )
};
function RenderItem({item}) {
  return (
    <div className="card">
      <img src={item.image} alt="item.name" width="100%"/>
      <div className="card-heading">{item.name}</div>
      <div className="d-flex">
        <div className="col-7">{item.price}</div>
        <div className="col-5">
          <div className="d-flex">
            <div className="col-6">
              <img src="/assets/images/hearticon.png" alt="heart icon" width="20"/>
            </div>
            <div className="col-6">{item.rating}</div>
          </div>
          
          
        </div>
      </div>
      
    </div>
  )
}