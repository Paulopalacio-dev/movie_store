import React, {useState, useRef} from "react";
import './MenuFavorite.css'

export default function MenuFavorite() {
  const [sidebar, setSidebar] = useState( false);
  const showSidebar =() => setSidebar(!sidebar);

  console.log(sidebar)
  return (
    <container className="container">
      <div className="menu-container-favorite">
        
        <button onClick={showSidebar} className="menu-bars" >
          <span className="material-icons">favorite</span>
        </button>

        <main  className={sidebar ? "nav-menu active" : "nav-menu"} style={{zIndex:1}}>
          <div className="shopping-cart">
          
          </div>
        </main>

      </div>
    </container>  
    
  )
}