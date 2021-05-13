 
import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import InfoWindow from "./InfoWindow"

const Map = ({ eventData, center, zoom }) => {
    
    const [locationInfo,setLocationInfo] = useState(null)
    
    // map through all coordinates and pass them to the marker component to plot on the map.
    const markers = eventData.map( ev => {
        // eliminate all data without gelocation
        if (ev.geolocation!=null) {
            // validate the coordinates
            if (ev.geolocation.coordinates[1]>=-90 && ev.geolocation.coordinates[1]<=90 && 
                ev.geolocation.coordinates[0]>=-180 && ev.geolocation.coordinates[0]<=180 ) {
                var thisLat =parseFloat(ev.geolocation.coordinates[1]);
                var thisLng =parseFloat(ev.geolocation.coordinates[0]);
                console.log(thisLat,thisLng);
                return <Marker lat={thisLat} lng={thisLng} onClick={()=> setLocationInfo({name:ev.name, nametype:ev.nametype, recclass:ev.recclass, mass:ev.mass, fall:ev.fall, year:ev.year})}/>
            }
        }           
    })


    return (
        <div className="map">
        {/* Load google map with API key and attributes with center and zoom level */}
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyD-556fa0QZcX_rgnkgkzIb9lagOD-qu7M' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
            {/* plot all lthe markers on the map */}
                 {markers} 
               
            </GoogleMapReact>

            {/* set location information on info window through state management */}
            {locationInfo && <InfoWindow info={locationInfo}/>}
        </div>
    )
}
//set the initial center position (i.e. stockholm) and zoom level of the Google map 
Map.defaultProps = {
    center: {
        lat: 59.3293,
        lng: 18.0686
    },
    zoom: 5
}

export default Map