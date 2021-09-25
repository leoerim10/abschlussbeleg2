import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import {Icon} from 'leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { useState, useEffect } from "react"
import Axios from "axios"
import 'leaflet/dist/leaflet.css'
const MyMap = (props) =>{
//fetch all data from database
const [contactList, setContactList] = useState([])
  useEffect (() =>{
    Axios.get("http://localhost:3001/read").then((Response) => {
      setContactList(Response.data)
    })
  }, [])

  
const position = [52.52, 13.405]
return(

<MapContainer  center={position} zoom={13} scrollWheelZoom={true}>
<TileLayer
  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>

{contactList.map((val, index) =>{
            return <div>
                    <Marker position={[val.lat, val.long]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
                        <Popup>
                          This is the location of {val.firstname} {val.lastname}.
                        </Popup>
                    </Marker>    
            </div>
          })}
</MapContainer>
)
}

export default MyMap