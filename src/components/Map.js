import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map({ profiles, selectedProfile }) {
  const center = [20.5937, 78.9629]; // Coordinates for the center of India
  const zoom = 5; // Set the zoom level for the map

  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="">OpenStreetMap</a> contributors'
        />
        {profiles.map((profile) => (
          <Marker key={profile.id} position={profile.coordinates}>
            <Popup>
              {profile.name}
            </Popup>
          </Marker>
        ))}
        {selectedProfile && (
          <Marker position={selectedProfile.coordinates}>
            <Popup>{selectedProfile.name}</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
