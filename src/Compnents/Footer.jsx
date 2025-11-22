
// src/components/Footer.jsx
import React, { useState } from 'react';
import StoreMap from './StoreMap';

const mockStores = [
  {
    name: 'Бутик на Арбате',
    address: 'ул. Арбат, д. 15, Москва',
    lat: 55.751244,
    lng: 37.618423,
  },
  {
    name: 'Галерея на Тверской',
    address: 'Тверская ул., д. 22, Москва',
    lat: 55.763244,
    lng: 37.631423,
  },
];

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer
      className="relative w-full h-[400px] md:h-[500px] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Карта на весь футер */}
      <div className="absolute inset-0 z-0">
        <StoreMap stores={mockStores} />
      </div>

      {/* Затемняющая подложка с плавным появлением */}
      <div
        className={`absolute inset-0 z-10 transition-all duration-500 ease-in-out ${
          isHovered ? 'bg-black/50 opacity-100' : 'bg-black/0 opacity-0'
        }`}
      ></div>

      {/* Текст поверх — появляется плавно при наведении */}
      <div
        className={`absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 transition-all duration-500 ease-in-out transform ${
          isHovered
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-light text-white tracking-wide mb-2">
          Наши магазины
        </h2>
        <p className="text-sm md:text-base text-white/90 max-w-2xl">
          Посетите нас в одном из наших бутиков и окунитесь в мир элегантности и стиля.
        </p>

        <div className="mt-6 text-xs text-white/70">
          © {new Date().getFullYear()} Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;