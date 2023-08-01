import Splide from '@splidejs/splide';
import { useEffect } from "react"

import "./splide.css"
 
import '@splidejs/splide/css/sea-green';

export const SplideGallery = () => {

    useEffect(()=> { 

        const splide = new Splide(".splide", {
          type: "loop",
          perPage: 10,
          perMove: 1,
          autoplay: true,
          autoScroll: {
            speed: 1
          }
 
        });
        splide.mount();
        return () => {
          splide.destroy();
        };
    }, [])
    

  return (
    <>
        <div className="splide-container">
          <section className="splide" aria-label="Splide Basic HTML Example">
              <div className="splide__track">
                <ul className="splide__list">
                  <li className="splide__slide">
                    <img src="https://cdn-icons-png.flaticon.com/512/919/919828.png?w=740&t=st=1689798920~exp=1689799520~hmac=1bdc46024eeca0c9b5a64b8ab7ba6625773a2eef357ad751d3577c592c5b71b2" />
                  </li>
                  <li className="splide__slide">
                    <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png?w=740&t=st=1689799004~exp=1689799604~hmac=845fe65fa8beae41100edca352d0a9faf41b5d468059e12d8305c771e648064e" />
                  </li>
                  <li className="splide__slide">
                    <img src=" https://cdn-icons-png.flaticon.com/512/179/179327.png?w=740&t=st=1689799087~exp=1689799687~hmac=1f35d85b72e103f2d7d008a65b6d21a340b183a971a5c4bdff763a87781e53a7" />
                  </li>
                  <li className="splide__slide">
                    <img src="https://cdn.cdnlogo.com/logos/c/18/css.svg" />
                  </li>
                  <li className="splide__slide">
                    <img src="https://cdn.worldvectorlogo.com/logos/c--4.svg" />
                  </li>
                  <li className="splide__slide">
                    <img src="https://cdn-icons-png.flaticon.com/512/603/603156.png?w=740&t=st=1689799942~exp=1689800542~hmac=ab4cb6c57e837a2e5aa4e7385c6be18fe62bcad0d82fe7462c8e5543a25a4e2c" />
                  </li>
                  <li className="splide__slide">
                    <img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" />
                  </li>
                </ul>
              </div>
          </section>
        </div>
    </>
  )
}
 