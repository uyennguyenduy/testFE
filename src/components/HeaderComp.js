export function HeaderComp() {
  const navItems = ['introduction', 'solution', 'rate plan', 'login', 'apply for free use']
  return (
    <div className="header-layout">
      <nav>
        <ul>
          {navItems.map((item, idx) => 
            <li key={idx} className="nav-item">
              <a herf="#" className="nav-link">{item.toUpperCase()}</a>
            </li>
          )}
        </ul>
      </nav>
      <Banner/>
    </div>
  )
}
function Banner() {
  return(
    <div>
      <img src="/assets/images/main-banner.png" alt="main banner"/>
    </div>
  )
}