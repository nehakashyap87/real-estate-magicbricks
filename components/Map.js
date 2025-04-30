// /components/Map.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function Map({ projects }) {
  const center = projects.length > 0
    ? [projects[0].coordinates.latitude, projects[0].coordinates.longitude]
    : [20.5937, 78.9629]; // Default: center of India

  return (
    <MapContainer center={center} zoom={10} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {projects.map((proj, index) => (
        proj.coordinates.latitude && proj.coordinates.longitude && (
          <Marker
            key={index}
            position={[proj.coordinates.latitude, proj.coordinates.longitude]}
          >
            <Popup>
              <strong>{proj.projectName}</strong><br />
              {proj.builder}<br />
              {proj.price}
            </Popup>
          </Marker>
        )
      ))}
    </MapContainer>
  );
}
