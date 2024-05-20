import L from "leaflet";
import MarkerIcon from "../../../node_modules/leaflet/dist/images/marker-icon.png";
import MarkerShadow from "../../../node_modules/leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";

import { mapStyles } from "./styles";
import { Salespeoples } from "@/Models/Salespeople";

interface MapProps {
  locations: Salespeoples[];
}

const Map: React.FC<MapProps> = ({ locations }) => {
  const [mapLocations, setMapLocations] = useState(locations);

  useEffect(() => {
    setMapLocations(locations);
  }, [locations]);

  return (
    <div>
      <MapContainer
        style={{...mapStyles, width: '100vw', maxWidth: '1190px'}}
        center={[-17.542843, -49.543787]}
        zoom={4}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {mapLocations.map(
          (location, index) =>
            location.latitude && (
              <Marker
                key={index}
                icon={
                  new L.Icon({
                    iconUrl: MarkerIcon.src,
                    iconRetinaUrl: MarkerIcon.src,
                    iconSize: [25, 41],
                    iconAnchor: [12.5, 41],
                    popupAnchor: [0, -41],
                    shadowUrl: MarkerShadow.src,
                    shadowSize: [41, 41],
                  })
                }
                position={[
                  Number(location.latitude),
                  Number(location.longitude),
                ]}
              >
                <Popup>
                  <div style={{ margin: "-10px 10px" }}>
                    <b>{location.name}</b>
                    <br></br>
                    {location.city}-{location.state}
                    <br></br>
                    {location.contact}
                    <br></br>
                    <a href={location.maps} target="_blank" rel="noreferrer">
                      Como chegar
                    </a>
                  </div>
                </Popup>
              </Marker>
            )
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
