import { useState } from "react";

export function HeaderComp() {
  const [open, setOpen] = useState(true);
  const handleClick = () => setOpen(!open);
  const styles = (open) ? 'block' : 'none';
  const navItems = ['introduction', 'solution', 'rate plan', 'login', 'apply for free use']
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand col-3">
          <a>
            <img src="assets/images/logo.png" alt="logo" width="50%"/>
          </a>
        </div>
        <div className="col-1 navbar-toggler" onClick={handleClick}>
          <span className="fa fa-bars"></span>
        </div>
        <div className="col-8 navbar-collapse" style={{display: styles}}>
          <ul className="navbar-nav">
          {navItems.map((item, idx) => 
            <li key={idx} className="nav-item">
              <a herf="#" className="nav-link">{item.toUpperCase()}</a>
            </li>
          )}
          </ul>
        </div>
        
      </nav>
      <Banner/>
    </div>
  )
}
function Banner() {
  return(
    <div className="pt-3">
      <img src="/assets/images/main-banner.png" alt="main banner"/>
    </div>
  )
}