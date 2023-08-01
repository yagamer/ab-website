 
import Typed from 'typed.js';
import "./home.css";
import { useEffect, useRef } from 'react';
 
 
 
export const Home = () => {
  
  let element = useRef();
  
  useEffect(()=> { 
    
    const typed = new Typed(element.current, {
      strings: ["Aplicaciones Web", "Android &amp; iOs apps", ],
      typeSpeed: 150,
      loop: true
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
    
  }, [])

 
  return (
    <>
        <div id="pages">
           <div className="home-container">
              <div className="home-title">
                  <div className="developer">
                    <h1>ABRAHAM LUNA</h1>
                    <p>PAGINA PRINCIPAL</p>
                  </div>
              </div>
              <div className="home-page">
                <div className="intro">
                  <p className="intro-welcome">Hola!</p>
                  <h1 className="intro-title">Bienvenido a</h1>
                  <h1 className="intro-title1">mi página Web </h1>
                  <h1 className='intro-typed'><span className='intro-rol'>desarrollo </span><span ref={ element}></span></h1>
                  <p className="intro-description">Freelancer💎Frontend &amp; Backend💎Developer</p>
                  <button className="intro-button">Contratar</button>
                </div>
                 
                <div className="social-media">
                  <div>
                   <p>Follow Me</p>
                  </div>
                  <div>---------</div>
                  <div className="icons">
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                </div>
              </div>
           </div>
           {/* next section */}
        </div>
     
    </>
  )
}


