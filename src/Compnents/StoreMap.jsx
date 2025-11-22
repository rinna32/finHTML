// src/components/StoreMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Исправление иконок
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const StoreMap = ({ stores }) => {
  const defaultCenter = stores.length
    ? [stores[0].lat, stores[0].lng]
    : [55.751244, 37.618423];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
      className="z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stores.map((store, index) => (
        <Marker key={index} position={[store.lat, store.lng]}>
          <Popup className="text-sm font-medium text-gray-900">
            <strong>{store.name}</strong>
            <br />
            <span className="text-gray-600">{store.address}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default StoreMap;