import {NavLink, Link} from "react-router-dom"
import "./menu.css"
 
export const Menu = () => {



  return (
    <>
        <div id="menu">
          <div className="icon">
            <NavLink to="/" className="general"  >
              <i className="fa-solid fa-desktop general-color"></i>
              <p className="general-color">Inicio</p>
            </NavLink>  
          </div>
          <div className="icon">
            <NavLink to="/apis"  className="general"   >
              <i className="fa-solid fa-gears general-color"></i>
              <p className="general-color">Projects</p>
            </NavLink>  
          </div>
          <div className="icon">
            <NavLink to="/blog" className="general">
              <i className="fa-brands fa-blogger general-color"></i>
              <p className="general-color">Blog</p>
            </NavLink>  
          </div>
        </div>
        
    </>
  )
}
