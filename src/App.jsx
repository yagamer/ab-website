import {Routes , Route, useLocation} from "react-router-dom"
import { Menu } from "./components/menu/Menu"
import { Home } from "./pages/Home"
import { Nav } from "./components/nav/Nav"
import { useState } from "react"
import { Apis } from "./pages/Apis"
import { Blog } from "./pages/Blog"
import { Unsplash } from "./pages/Unsplash"
import { NotFound } from "./pages/NotFound"
import { GoogleMaps } from "./pages/GoogleMaps"
import { Section } from "./components/section/Section"
 

 

export const App = () => {

  const [toggle, setToggle] = useState(false)
   
  let cEndpoint = useLocation()
 
  console.log(cEndpoint.pathname)
  return (
    <>
        <div className={toggle ? "layout toggleMenu" : "layout"}>
          <Nav setToggle={setToggle} toggle={toggle}/>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/apis" element={<Apis />} />
            <Route path="/unsplash" element={<Unsplash />} />
            <Route path="/ab-website/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/google" element={<GoogleMaps />} />
          </Routes>
        </div>
        {
          cEndpoint.pathname === "/"  && <Section />
        }
    </>
  )
}
