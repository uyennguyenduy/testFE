import { BESTPRODUCTS } from "../shared/bestProductsList"


export function IntroComp() {
  return(
    <div>
      <section className='p-3 bg-introduction '>
        {/*<img src="/assets/images/introduction-bg.png" alt="main banner"/>*/}
        <div className="col-6 color-white">
          <h1 className="heading-bolder">WHAT HAPPENED!</h1>
          <p className="text-body pt-2">How to create mobile-optimized videos in minutes. Not a designer, 
            every team makes a lot of videos Can be trimmed. Take the first 
            step to your brand's success. How to create 
            mobile-optimized videos in minutes.
          </p> 
        </div>
      </section>
      
      <section className="p-2 bg-best">
        <div className="layout-best">
          <h1 className="heading-bold">BEST PRODUCT</h1>
          <p className="text-body">How to create mobile-optimized videos in minutes. Not a designer, 
            every team makes a lot of videos Can be trimmed. Take the first 
          </p>
        </div>
        <div className="d-flex demo" >
          {BESTPRODUCTS.map(item => {
            return (
              <div className="col-4" key={item.id}>
                <RenderBestItems item={item}/>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
function RenderBestItems({item}) {
  return (
    <div className="card-best">
      <img src={item.image} alt={item.name} width="100%"/>
      <div className="card-best-tag">
        <img src={item.imageTag} alt={item.name} width="70"/>
      </div>
      <div className="card-best-box d-flex">
        <div className="col-9 text-emphasize">{item.description}</div>
        <div className="col-3">
          <img src="/assets/images/go-icon.png" alt="go icon" width="70"/>
        </div>
      </div>
    </div>
  )
}