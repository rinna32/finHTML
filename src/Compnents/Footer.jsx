
import React, { useState } from 'react';
import StoreMap from './StoreMap';

const stores = [
  { id: 1, name: 'Бутик на Арбате',     address: 'ул. Арбат, д. 15',         lat: 55.751244, lng: 37.618423 },
  { id: 2, name: 'Галерея на Тверской', address: 'Тверская ул., д. 22',      lat: 55.763244, lng: 37.631423 },
];

const Footer = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        
        <div className="space-y-10">
          <div>
            <h2 className="font-light text-4xl md:text-5xl tracking-widest mb-3">Наши бутики</h2>
            <p className="text-white/50 text-sm tracking-wide">Москва</p>
          </div>

          <div className="space-y-8">
            {stores.map((store) => (
              <div
                key={store.id}
                className="group cursor-default"
                onMouseEnter={() => setHoveredId(store.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <h3 className={`text-xl font-medium tracking-wider transition-all duration-300
                  ${hoveredId === store.id ? 'text-amber-400' : 'text-white group-hover:text-amber-100'}`}
                >
                  {store.name}
                </h3>
                <p className={`text-sm mt-1 transition-all duration-300
                  ${hoveredId === store.id ? 'text-white' : 'text-white/60'}`}
                >
                  {store.address}
                </p>
                <div className={`mt-3 w-12 h-px transition-all duration-500
                  ${hoveredId === store.id ? 'w-24 bg-amber-400' : 'bg-amber-600/40 group-hover:bg-amber-600'}`}
                />
              </div>
            ))}
          </div>

          <div className="pt-12 text-white/30 text-xs tracking-widest">
            © {new Date().getFullYear()} • ВСЕ ПРАВА ЗАЩИЩЕНЫ
          </div>
        </div>

        
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
          <StoreMap stores={stores} hoveredId={hoveredId} />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;