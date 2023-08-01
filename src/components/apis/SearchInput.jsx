

import { useEffect, useState } from "react";
import "./input.css";
 

export const SearchInput = ( {setImages}) => {

  const [text, setText] = useState("");
 const [place, setPlace] = useState("Buscar Imagen")


useEffect(()=> { 
  let endPoint = `https://api.unsplash.com/search/photos?per_page=16&query=fox&orientation=landscape&client_id=X0o0ds6JdFFmgzBBvw9V97G0-xQ3y5GyeDSzYDzf5T0`

  fetch(endPoint)
  .then((data)=> { 
    return data.json();
  })
  .then(({results})=> { 
    let newArr = results.map((item)=> { 
      return {
        id: item.id,
        description: item.alt_description,
        likes: item.likes,
        url: item.urls.regular
      }
    })
    console.log(newArr)
     setImages(newArr);
     setText("");
  });
},[])

  let onClick = (e)=> { 
     if(text === "") {
      setPlace("Que Imagen Buscas") 
      setTimeout(() => {
         setPlace("Buscar Imagen")
      }, 1500);
     } else { 
      let endPoint = `https://api.unsplash.com/search/photos?per_page=16&query=${text}&orientation=landscape&client_id=X0o0ds6JdFFmgzBBvw9V97G0-xQ3y5GyeDSzYDzf5T0`

      fetch(endPoint)
      .then((data)=> { 
        return data.json();
      })
      .then(({results})=> { 
        let newArr = results.map((item)=> { 
          return {
            id: item.id,
            description: item.alt_description,
            likes: item.likes,
            url: item.urls.regular
          }
          
        })
    
         setImages(newArr);
         setText("");
      });

     }
  }
  function onKeydown (e) { 
    if(e.key === "Enter") { 
      onClick();
    }
  }
  return (
    <>
      <div className="input-container">
        <div className="input-title"> 
          <div>
            <h1>Unsplash API</h1>
            <p>Tu Puerta a un Mundo de Imágenes Creativas</p>
          </div>
        </div>
        <div className="search-image">
          <input onKeyDown={onKeydown} value={text} onChange={(e)=> setText(e.target.value) } placeholder={place}/>
          <button onClick={onClick}>Buscar</button>
        </div>
       
      </div>
    </>
  )
}
