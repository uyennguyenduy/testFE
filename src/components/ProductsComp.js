import { PRODUCTS } from '../shared/productsList';

export function ProductsComp() {
  return(
    <div>
      <div className="row pt-5 p-2 ">
        {PRODUCTS.map(item =>
          (
            <RenderItem key={item.id} item={item}/> 
          )
        )}
      </div>
      <div className="row">
        <button className="btn">SEE MORE</button>
      </div>
      
    </div>
  )
};
function RenderItem({item}) {
  return (
    <div className="card-product">
      <img src={item.image} alt={item.name} width="100%"/>
      <div className="title2 pt-1">{item.name}</div>
      <div className="row pt-1">
        <div className="col-7 body2">
          {item.price}
        </div>
        <div className="col-5">
          <div className="row">
            <div className="col-6">
              <img src="/assets/images/hearticon.png" alt="heart icon" width="20"/>
            </div>
            <div className="col-6 body2">{item.rating}</div>
          </div>
          
          
        </div>
      </div>
      
    </div>
  )
}