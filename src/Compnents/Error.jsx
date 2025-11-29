import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Error() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6">
            <div className="text-center text-6xl">

                <h1 className="text-12xl sm:text-13xl md:text-14xl lg:text-15xl font-black tracking-tighter text-gray-900 leading-none">
                    404
                </h1>


                <p className="mt-8 text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-gray-800">
                    Page not found
                </p>

                <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-md mx-auto">
                    К сожалению, страница, которую вы ищете, не существует.
                </p>


                <NavLink
                    to="/"
                    className="inline-block mt-12 px-10 py-4 border-2 border-black text-black font-medium text-lg tracking-wider hover:bg-black hover:text-white transition duration-300"
                >
                    ВЕРНУТЬСЯ НА ГЛАВНУЮ
                </NavLink>
            </div>
        </div>
    );
}