import React from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import './StoreMap.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


delete L.Icon.Default.prototype._getIconUrl;


const createGoldMarker = (isHovered = false) => {
  const size = isHovered ? 32 : 20;
  const pulse = isHovered ? `
    <circle cx="16" cy="16" r="18" fill="none" stroke="#f59e0b" stroke-width="2" opacity="0.6">
      <animate attributeName="r" from="14" to="28" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" from="0.8" to="0" dur="2s" repeatCount="indefinite"/>
    </circle>
  ` : '';

  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <!-- Тень -->
      <circle cx="16" cy="16" r="10" fill="#000" opacity="0.2" filter="blur(4px)"/>
      
      <!-- Основной круг -->
      <circle cx="16" cy="16" r="10" fill="${isHovered ? '#f59e0b' : '#d4af37'}"/>
      <circle cx="16" cy="16" r="10" fill="none" stroke="white" stroke-width="3"/>
      
      <!-- Блик -->
      <circle cx="12" cy="12" r="4" fill="white" opacity="0.4"/>
      
      <!-- Пульсация при ховере -->
      ${pulse}
    </svg>
  `;

  return L.divIcon({
    html: svg,
    className: 'custom-gold-marker',  
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2], 
    popupAnchor: [0, -size / 2],
  });
};

const StoreMap = ({ stores, hoveredId }) => {
  const center = stores.length ? [stores[0].lat, stores[0].lng] : [55.751244, 37.618423];

  return (
    <MapContainer
      center={center}
      zoom={13.2}
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={false}
      style={{ height: '100%', width: '100%', background: '#f8f8f8' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; OpenStreetMap &copy; CartoDB'
      />

      {stores.map((store) => (
        <Marker
          key={store.id}
          position={[store.lat, store.lng]}
          icon={createGoldMarker(hoveredId === store.id)}
        />
      ))}

      
      <style jsx global>{`
        .custom-gold-marker {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .custom-gold-marker img {
          width: 100% !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
    </MapContainer>
  );
};

export default StoreMap;