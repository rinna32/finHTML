import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Убираем стандартные иконки Leaflet (предотвращаем 404 на иконки)
delete L.Icon.Default.prototype._getIconUrl;

// Создаём кастомную SVG-иконку — работает везде, без внешних зависимостей
const createGoldMarkerIcon = (isHighlighted = false) => {
  const size = isHighlighted ? 40 : 24;
  const r = size / 2;

  // SVG-код как строка (без внешних ссылок)
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <!-- Тень -->
      <circle cx="${r}" cy="${r}" r="${r - 4}" fill="rgba(0,0,0,0.2)" />
      <!-- Основной круг -->
      <circle cx="${r}" cy="${r}" r="${r - 4}" fill="${isHighlighted ? '#f59e0b' : '#d4af37'}" />
      <!-- Обводка -->
      <circle cx="${r}" cy="${r}" r="${r - 4}" fill="none" stroke="white" stroke-width="2" />
      <!-- Блик -->
      <circle cx="${r - 6}" cy="${r - 6}" r="4" fill="white" opacity="0.5" />
      ${
        isHighlighted
          ? `
      <!-- Анимированная пульсация -->
      <circle cx="${r}" cy="${r}" r="${r + 2}" fill="none" stroke="#f59e0b" stroke-width="2" opacity="0.6">
        <animate attributeName="r" values="${r + 2};${r + 12};${r + 2}" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
      </circle>`
          : ''
      }
    </svg>
  `;

  return L.divIcon({
    html: svg,
    className: '', // критически важно: иначе Leaflet добавит свой CSS
    iconSize: [size, size],
    iconAnchor: [r, r],
    popupAnchor: [0, -r],
  });
};

// Основной компонент
const StoreMap = ({ stores = [], hoveredId = null }) => {
  // Фильтруем только валидные магазины с координатами
  const validStores = (stores || []).filter(store => {
    const lat = parseFloat(store.latitude);
    const lng = parseFloat(store.longitude);
    return !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0;
  });

  // Центр карты: первый магазин или Москва
  const defaultCenter = [55.751244, 37.618423];
  const center = validStores.length
    ? [parseFloat(validStores[0].latitude), parseFloat(validStores[0].longitude)]
    : defaultCenter;

  return (
    <MapContainer
      center={center}
      zoom={13}
      minZoom={10}
      maxZoom={18}
      scrollWheelZoom={true}
      dragging={true}
      zoomControl={true}
      style={{ height: '100%', width: '100%', background: '#f8f8f8' }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      {validStores.map((store) => (
        <Marker
          key={store.id}
          position={[parseFloat(store.latitude), parseFloat(store.longitude)]}
          icon={createGoldMarkerIcon(hoveredId === store.id)}
        />
      ))}
    </MapContainer>
  );
};

export default StoreMap;