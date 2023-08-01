import { Loader } from "@googlemaps/js-api-loader"
 
 
import "./google.css"
import { useEffect } from "react";
 
let key = "AIzaSyAUWlyTY5Pgq8TEFr0Jeb9nW0O45vqGU-Y";


export const GoogleMaps = () => {
 
 useEffect(()=> { 
 
let map;
const additionalOptions = {};
 
const loader = new Loader({
  apiKey: "AIzaSyAUWlyTY5Pgq8TEFr0Jeb9nW0O45vqGU-Y",
  version: "weekly",
  ...additionalOptions
  
});

loader.load().then(async () => {

  const { Map } = await window.google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 19.43260, lng: -99.133209 },
    zoom: 14,
    mapId: "5f9d0c6ffc2f0f3e",
    // mapTypeId: 'satellite'
    
  });

  let angel = new window.google.maps.Marker({
    position: {lat: 19.427029460253166, lng: -99.16766450026694 },
    map,
    title: "El Angel",
    icon: {
      // url: "https://cdn-icons-png.flaticon.com/128/9120/9120723.png", 
      // scaledSize: new window.google.maps.Size(50, 50)
    } 
  });
  const infoAngel = new window.google.maps.InfoWindow({
    content: `El Ángel de la Independencia`,
    ariaLabel: "El Angel",
  });
  angel.addListener("click", () => {
    infoAngel.open({
      anchor: angel,
      map,
    });
  });
  infoAngel.open(map, angel);

  let bellasArtes = new window.google.maps.Marker({
    position: {lat: 19.43519104372578, lng: -99.14113053627484 },
    map,
    title: "Bellas Artes",
    icon: {
      // url: "https://cdn-icons-png.flaticon.com/128/9120/9120723.png", 
      // scaledSize: new window.google.maps.Size(50, 50)
    } 
  });
  const infoBellasArtes = new window.google.maps.InfoWindow({
    content: `Palacio de Bellas Artes`,
    ariaLabel: "El Angel",
  });
  bellasArtes.addListener("click", () => {
    infoBellasArtes.open({
      anchor: bellasArtes,
      map,
    });
  });
  infoBellasArtes.open(map, bellasArtes);
  //museo  
  let museo = new window.google.maps.Marker({
    position: {lat: 19.429355658826225, lng: -99.13235846612173 },
    map,
    title: "Museo de la Ciudad de México",
    icon: {
      // url: "https://cdn-icons-png.flaticon.com/128/9120/9120723.png", 
      // scaledSize: new window.google.maps.Size(50, 50)
    } 
  });
  const infoMuseo = new window.google.maps.InfoWindow({
    content: `Museo de la Ciudad de México`,
    ariaLabel: "Museo de la Ciudad de México",
  });
  museo.addListener("click", () => {
    infoMuseo.open({
      anchor: museo,
      map,
    });
  });
  infoMuseo.open(map, museo);
});

// [END maps_programmatic_load]
   

 }, [])

  return (
    <>
        <div id="pages">
            <div className="google-map-container">
                <div className="maps-title">
                  <div>
                    <h1>Google maps API</h1>
                    <p>Conectando el mundo con google maps</p>
                  </div>
                </div>
                <div   id="map"></div>
            </div>
        </div>
    </>
  )
}

