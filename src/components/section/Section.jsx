
import { SplideGallery } from "../splide/SplideGallery"
import "./section.css" 
 
 

export const Section = () => {
 


  return (
    <>
        <div className="section">
            <div className="fx">
              <h1 className='section-title'>Lenguages de Programacion</h1>
              <p className="section-description">Diseño de software y aplicaciones web</p>
             
            </div>
        </div> 
        <SplideGallery />
    </>
  )
}
