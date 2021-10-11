import { BESTPRODUCTS } from "../shared/bestProductsList"


export function IntroComp() {
  return(
    <div>
      <section className='layout-intro'>
        <div className="col-6">
          <h2 className="heading2-bolder">WHAT HAPPENED!</h2>
          <p className="body1 pt-2">How to create mobile-optimized videos in minutes. Not a designer, 
            every team makes a lot of videos Can be trimmed. Take the first 
            step to your brand's success. How to create 
            mobile-optimized videos in minutes.
          </p> 
        </div>
      </section> 
      <section className="layout-best">
        <div className="row">
          <div className="col-8">
            <h2 className="heading2">BEST PRODUCT</h2>
            <p className="body1 pt-1">How to create mobile-optimized videos in minutes. Not a designer, 
              every team makes a lot of videos Can be trimmed. Take the first 
            </p>
          </div>
        </div>
        <div className="row p-2">
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
      <div className="card-best-box">
        <div className="row">
          <div className="col-9 text-left">
            <div className="title2-bolder dark1">{item.description}</div>
          </div>
          <div className="col-3">
            <img src="/assets/images/go-icon.png" alt="go icon" width="50"/>
          </div>
        </div>
      </div>
    </div>
  )
}