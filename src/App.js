import { FooterComp } from "./components/FooterComp";
import { HeaderComp } from "./components/HeaderComp";
import { IntroComp } from "./components/IntroComp";
import { IssueComp } from "./components/IssueComp";
import { ProductsComp } from "./components/ProductsComp";
import { StoryComp } from "./components/StoryComp";
import { VideoComp } from "./components/VideoComp";
import './stylesheets/styles.scss';

function App() {
  return (
    <div className="App">
      <HeaderComp/>
      <IntroComp/>
      <ProductsComp/>
      <StoryComp/>
      <IssueComp/>
      <VideoComp/>
      <FooterComp/>
   
     
      
      
    </div>
  );
}

export default App;
