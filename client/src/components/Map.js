import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import {Icon} from 'leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import 'leaflet/dist/leaflet.css'
const MyMap = (props) =>{
  
const position = [52.52, 13.405]
const position2 = [52.521, 13.41]
return(

<MapContainer center={position} zoom={13} scrollWheelZoom={true}>
<TileLayer
  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
  <Popup>
    This is the first location
  </Popup>
</Marker>
<Marker position={position2} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
  <Popup>
    This is the second location
  </Popup>
</Marker>

</MapContainer>
)
}

export default MyMap