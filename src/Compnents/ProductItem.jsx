import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function ProductItem() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProduct() {
      try {
        const resp = await fetch(`http://localhost:3000/api/products/${id}`);
        if (!resp.ok) throw new Error('Товар не найден');
        const data = await resp.json();
        setProduct(data.product || data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white text-3xl">
        <div className="animate-pulse">Загрузка...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center text-white">
        <p className="text-2xl mb-8">Товар не найден</p>
        <Link to="/catalog" className="text-gray-400 hover:text-white transition">
          ← Вернуться в каталог
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Полноэкранный режим — одна вещь, один мир */}
      <div className="fixed inset-0 bg-black text-white overflow-hidden">
        
        {/* Кнопка назад — минимализм */}
        <Link
          to="/catalog"
          className="fixed top-8 left-8 z-50 flex items-center gap-3 text-sm tracking-widest hover:text-gray-400 transition"
        >
          <ArrowLeft size={20} />
          <span>BACK</span>
        </Link>

        {/* Главный контейнер — два блока: фото и инфа */}
        <div className="h-screen flex flex-col lg:flex-row">

          {/* Левая часть — фото (50% или 60% на десктопе) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full lg:w-3/5 h-1/2 lg:h-full relative overflow-hidden bg-black"
          >
            <img
              src={`http://localhost:3000/${product.image_url}`}
              alt={product.name}
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-10000 ease-linear"
            />

            {/* Лёгкий оверлей для драмы */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-30"></div>
          </motion.div>

          {/* Правая часть — вся информация */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="w-full lg:w-2/5 h-1/2 lg:h-full flex flex-col justify-center p-12 lg:p-20 xl:p-32 space-y-12"
          >

            {/* Название — огромный шрифт */}
            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tighter">
              {product.name}
            </h1>

            {/* Категория — тонко и сверху */}
            <p className="text-sm uppercase tracking-widest text-gray-500">
              {product.category}
            </p>

            {/* Цена — появляется с задержкой, как в люксе */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-4xl lg:text-5xl font-light"
            >
              {Number(product.price).toLocaleString('ru-RU')} ₽
            </motion.p>

            {/* Описание — минимализм */}
            <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-md">
              {product.description || 'Лимитированная вещь из новой коллекции. Доступно только здесь.'}
            </p>

            {/* Кнопка добавить в корзину — жирная, но элегантная */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-16 w-full lg:w-auto inline-flex items-center gap-4 bg-white text-black px-12 py-6 text-lg font-medium tracking-wider hover:bg-gray-200 transition"
            >
              <ShoppingBag size={24} />
              Добавить в корзину
            </motion.button>

            {/* Доп. инфа мелким шрифтом внизу */}
            <div className="pt-20 text-xs tracking-widest text-gray-600 space-y-2">
              <p>• Доставка по всему миру</p>
              <p>• Возврат в течение 14 дней</p>
              <p>• Лимитированный тираж</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}