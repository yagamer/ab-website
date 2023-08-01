import {Link, useParams} from "react-router-dom";
import Button from '@mui/material/Button';

import "./card.css"
 
let cards = [
  {id: 1, description: "La fuente de imágenes de internet.", title:"Unsplash API", imageUrl: "https://images.unsplash.com/photo-1570215778372-2a5b29c18fc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80", path: "/unsplash",    },
  {id: 2, description: "Crea experiencias del mundo real y en tiempo real para sus clientes con mapas dinámicos", title: "Google API", imageUrl: "https://images.unsplash.com/photo-1600783245777-080fd7ff9253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80", path: "/google",    },
  {id: 3, description: "Sitio demo offical de Abraham Luna , tecnologias utilizadas HTML,Css, Js React", title: "Abraham's Website", imageUrl: "https://i.ibb.co/3m1ppMv/website.jpg", path: "https://tupaginaenlinea.netlify.app/"    },
  {id: 3, description: "Sitio demo offical de Abraham Luna , tecnologias utilizadas HTML,Css, Js React", title: "Abraham's Website", imageUrl: "https://i.ibb.co/RcDYrP2/website1.jpg", path: "https://abrahamluna.netlify.app/"    }

]

export const Card = () => {

 

  return (
    <>
    {
      cards.map((api)=> {
        return (
          <div key={api.id} className="card">
            <div className="card-image">
                <img src={api.imageUrl} />
            </div>
            <div className="card-description">
                <div>
                  <h1>{api.title}</h1>
                  <p>{api.description}</p>
                </div>
            </div>
            <div className="card-title">
                <Link to={api.path}>
                  <div className="card-btn">
                    <p>Open</p>
                  </div>
                </Link>
            </div>
          </div>
        )
      })
    }
    </>
  )
}
