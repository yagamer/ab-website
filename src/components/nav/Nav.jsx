import {Link} from "react-router-dom";

import "./nav.css"

export const Nav = ({toggle, setToggle}) => {


  return (
    <>
        <nav id="nav">
          <div className="logo">
            <Link to="/" >
              <img src={`${process.env.PUBLIC_URL}/images/logo.png`} />
            </Link>
          </div>
          <div className="working">
            <i onClick={(e)=> setToggle(!toggle)} className="fa-solid fa-bars"></i>
          </div>
          <div className="login">
            
          </div>
        </nav>
    </>
  )
}
