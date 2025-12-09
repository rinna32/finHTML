// src/Components/UserProfile.jsx (или Pages/ProfilePage.jsx — как у вас названо)
import React from 'react';
import { useAuth } from '../hooks/useAuth'; // ← наш хук
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const UserProfile = () => {
    const { user, loading, logout: authLogout } = useAuth(); // ← получаем всё из хука
    const navigate = useNavigate();

    const handleLogout = () => {
        authLogout(); // ← используем logout из useAuth (он всё сделает правильно)
        navigate('/login'); // или navigate('/') — как вы хотите
    };

    const handleEditProfile = () => {
        alert('Редактирование профиля пока не реализовано');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <p className="text-gray-500">Загрузка...</p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-white py-12 px-4 text-center">
                <p className="text-xl text-gray-600">Вы не авторизованы</p>
                <NavLink
                    to="/login"
                    className="mt-4 inline-block text-blue-600 hover:underline font-medium"
                >
                    Перейти на страницу входа
                </NavLink>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                    <div className="p-8 md:p-12 lg:p-16">
                        <div className="flex flex-col items-center md:flex-row gap-10 lg:gap-16">
                            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-white border-2 border-gray-100 shrink-0 overflow-hidden shadow-md">
                                <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                                    <svg
                                        className="w-20 h-20 text-gray-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={0.5}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <h1 className="text-4xl lg:text-5xl font-bold text-black tracking-tight">
                                    {user.name || user.email?.split('@')[0] || 'Пользователь'}
                                </h1>

                                <p className="mt-2 text-lg text-gray-600 font-medium">
                                    Покупатель · {user.email || 'email не указан'}
                                </p>

                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={handleEditProfile}
                                        className="px-8 py-3 border border-black text-black font-bold text-sm tracking-wider hover:bg-black hover:text-white transition"
                                    >
                                        РЕДАКТИРОВАТЬ ПРОФИЛЬ
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="px-8 py-3 border border-red-500 text-red-500 font-bold text-sm tracking-wider hover:bg-red-500 hover:text-white transition"
                                    >
                                        ВЫЙТИ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;