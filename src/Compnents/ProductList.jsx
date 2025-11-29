import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductList() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getProducts() {
            try {
                setLoading(true);
                const resp = await fetch('http://localhost:3000/api/products');
                if (!resp.ok) throw new Error('Не удалось загрузить товары');

                const data = await resp.json();

                let productsArray = [];
                if (Array.isArray(data)) {
                    productsArray = data;
                } else if (data && Array.isArray(data.products)) {
                    productsArray = data.products;
                } else if (data && Array.isArray(data.data)) {
                    productsArray = data.data;
                } else {
                    console.error('Неожиданная структура данных:', data);
                    throw new Error('Некорректный формат данных с сервера');
                }

                setProducts(productsArray);
            } catch (err) {
                console.error('Ошибка загрузки товаров:', err);
                setError(err.message || 'Ошибка сервера');
            } finally {
                setLoading(false);
            }
        }
        getProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center text-2xl text-gray-800">
                Загрузка коллекции...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center text-xl text-gray-700 p-6 text-center">
                Ошибка: {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-bold text-center mb-16 text-gray-900">
                    Каталог
                </h1>

                {products.length === 0 ? (
                    <div className="text-center text-gray-500 text-xl py-20">
                        Коллекция пока пуста.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {products.map((product) => (
                            <div
                                key={product.id || product._id}
                                className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="bg-gray-100 overflow-hidden">
                                    <img
                                        src={`http://localhost:3000/${product.image_url}`}
                                        alt={product.name}
                                        className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                                       
                                    />
                                </div>

                                <div className="p-8 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition">
                                            {product.name}
                                        </h3>
                                        <span className="text-2xl font-bold text-gray-800">
                                            {Number(product.price).toLocaleString('ru-RU')} ₽
                                        </span>
                                    </div>

                                    <p className="text-sm text-gray-600 uppercase tracking-wider font-medium">
                                        {product.category || 'Без категории'}
                                    </p>

                                    <p className="text-gray-700 leading-relaxed">
                                        {product.description || 'Описание отсутствует'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}