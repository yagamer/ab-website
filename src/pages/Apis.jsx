

import { Card } from "../components/apis/Card"
import "./apis.css"


 

export const Apis = () => {



  return (
    <>
        <div id="pages">
          <div className="api-container">
            <div className="api-title">
              <div className="api-description">
                <h1>Web APIs</h1>
                <p>La Clave para Desarrollar Aplicaciones Modernas</p>
              </div>
            </div>
            <div className="api-cards">
                <Card />
            </div>
          </div>
        </div>
    </>
  )
}
