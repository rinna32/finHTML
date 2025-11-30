import React, { useState, useEffect } from 'react';
import StoreMap from './StoreMap';

const Footer = () => {
  const [stores, setStores] = useState([])
  const [hoveredId, setHoveredId] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
   
    const fetchShops = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/shops');
        const result = await response.json();

        if (result.success && Array.isArray(result.data)) {
         
          setStores(result.data);
        }
      } catch (err) {
        console.error('Ошибка загрузки магазинов:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  // // Пока грузится — можно показать заглушку или скрыть карту
  // if (loading && stores.length === 0) {
  //   return 
  // }

  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <div className="space-y-10">
          <div>
            <h2 className="font-light text-4xl md:text-5xl tracking-widest mb-3">Наши бутики</h2>
            <p className="text-white/50 text-sm tracking-wide">Москва</p>
          </div>

          {loading ? (
            <p className="text-white/60">Загрузка...</p>
          ) : stores.length > 0 ? (
            <div className="space-y-8">
              {stores.map((store) => (
                <div
                  key={store.id}
                  className="group cursor-default"
                  onMouseEnter={() => setHoveredId(store.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <h3
                    className={`text-xl font-medium tracking-wider transition-all duration-300
                      ${hoveredId === store.id ? 'text-amber-400' : 'text-white group-hover:text-amber-100'}`}
                  >
                    {store.address} 
                  </h3>
                  <p className={`text-sm mt-1 transition-all duration-300
                    ${hoveredId === store.id ? 'text-white' : 'text-white/60'}`}
                  >
                    {store.phone || '—'}
                  </p>
                  <div className={`mt-3 w-12 h-px transition-all duration-500
                    ${hoveredId === store.id ? 'w-24 bg-amber-400' : 'bg-amber-600/40 group-hover:bg-amber-600'}`}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white/60">Магазины не найдены</p>
          )}

          <div className="pt-12 text-white/30 text-xs tracking-widest">
            © {new Date().getFullYear()} • ВСЕ ПРАВА ЗАЩИЩЕНЫ
          </div>
        </div>

        
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl">
          {!loading && stores.length > 0 ? (
            <StoreMap stores={stores} hoveredId={hoveredId} />
          ) : (
            <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white/30">
              Карта загружается...
            </div>
          )}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;