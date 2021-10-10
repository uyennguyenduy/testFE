export function HeaderComp() {
  const navItems = ['introduction', 'solution', 'rate plan', 'login', 'apply for free use']
  return (
    <div>
      <ul>
        {navItems.map((item, idx) => 
          <li key={idx} className="nav-item">
            <a herf="#" className="nav-link">{item.toUpperCase()}</a>
          </li>
        )}
      </ul>
      <Banner/>
    </div>
  )
}
function Banner() {
  return(
    <div>
      <img src="/assets/images/main-banner.png" alt="main banner" style={{width: '100vw'}}/>
    </div>
  )
}