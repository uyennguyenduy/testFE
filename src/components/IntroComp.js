import { BESTPRODUCTS } from "../shared/bestProductsList"


export function IntroComp() {
  const bestProduct = BESTPRODUCTS.map(item => {
    return(
      <div>
        <img src={item.image} alt={item.name} width="100" />
      </div>
    )
  })
  return(
    <div>
      <div>
        <img src="/assets/images/introduction-bg.png" alt="main banner" style={{width: '100vw'}}/>
        <div>WHAT HAPPENED!</div>
        <p>How to create mobile-optimized videos in minutes. Not a designer, 
          every team makes a lot of videos Can be trimmed. Take the first 
          step to your brand's success. How to create 
          mobile-optimized videos in minutes.</p>
      </div>
      <div>
        <div>BEST PRODUCT</div>
        <p>How to create mobile-optimized videos in minutes. Not a designer, 
            every team makes a lot of videos Can be trimmed. Take the first </p>
        <div>{bestProduct}</div>
      </div>
    </div>
  )
}
