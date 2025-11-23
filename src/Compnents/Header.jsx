import { useState } from "react";
import { NavLink, Outlet } from "react-router";


export default function MainLayout() {
    const [isHovered, setIsHovered] = useState(false);

    return (
            <header 
                className="fixed top-0 left-0 right-0 z-50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div
                    className={`flex h-16 items-center justify-between px-6 transition-all duration-300 ${isHovered
                        ? "bg-black/20 backdrop-blur-sm"
                        : "bg-transparent"}`}>
                    <NavLink
                        to="/"
                        className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg transition-all hover:scale-110 active:scale-95">
                        <img src="public\image.png" alt="Главная" className="h-7 w-7 object-contain" />
                    </NavLink>

                    <nav className="flex items-center gap-8 text-gray-900 text-base font-medium">
                        <NavLink
                            to="/catalog"
                            className={({ isActive }) =>
                                `transition ${isActive ? "text-gray-900" : "text-gray-900 hover:text-white"}`}>
                            Каталог
                        </NavLink>
                        <span className="text-white/40">|</span>
                        <NavLink
                            to="/history"
                            className={({ isActive }) =>
                                `transition ${isActive ? "text-gray-900 font-bold" : "text-gray-900 hover:text-white"}`}>
                            История
                        </NavLink>
                        <span className="text-white/40">|</span>
                        <NavLink
                            to="/outfits"
                            className={({ isActive }) =>
                                `transition ${isActive ? "text-gray-900 font-bold" : "text-gray-900 hover:text-white"}`}>
                            Аутфиты
                        </NavLink>
                    </nav>
                </div>
            </header>
        
    )
}