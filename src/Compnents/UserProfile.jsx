import React from 'react';

const UserProfile = () => {
    return (
        <div className="min-h-screen bg-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                    <div className="p-8 md:p-12 lg:p-16">
                        <div className="flex flex-col items-center md:flex-row gap-10 lg:gap-16">

                            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-white border-2 border-gray-100 shrink-0 overflow-hidden shadow-md">
                                <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                                    <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="text-center md:text-left flex-1">
                                <h1 className="text-4xl lg:text-5xl font-bold text-black tracking-tight">
                                    Анна Иванова
                                </h1>

                                <p className="mt-2 text-lg text-gray-600 font-medium">
                                    Покупатель · Москва
                                </p>


                                <div className="mt-8">
                                    <button className="px-8 py-3 border border-black text-black font-bold text-sm tracking-wider hover:bg-black hover:text-white transition">
                                        РЕДАКТИРОВАТЬ ПРОФИЛЬ
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