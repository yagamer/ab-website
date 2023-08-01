 
 
import { useState } from "react";
import { SearchInput } from "../components/apis/SearchInput";
import "./unsplash.css"

  
export const Unsplash = () => {

  const [images, setImages] = useState([]);
  
 
  return (
    <>
        <div id="pages" className="page-container">
            <div className="unsplash-container">
              <SearchInput setImages={setImages}   />
              <div className="unsplash-grid">
                {
                  images.map((item)=> { 
                      return (

                        <div key={item.id} className="card-image-container">
                          <a href={item.url} data-lightbox="models" data-title={item.description}>
                            <img src={item.url} loading="lazy" />
                          </a>
                        </div>
                      )
                  })
                }
              </div>
            </div>
        </div>
    </>
  )
}
