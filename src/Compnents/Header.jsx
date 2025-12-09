
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-transparent">
      </header>
    );
  }


  let bgClass = 'bg-transparent';
  if (isHovered) {
    bgClass = 'bg-black/20 backdrop-blur-sm';
  } else if (isScrolled) {
    bgClass = 'bg-white shadow-sm';
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex h-16 items-center justify-between px-6 transition-all duration-300 ${bgClass}`}
      >
        <NavLink
          to="/"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg transition-all hover:scale-110 active:scale-95"
        >
          <img src="/image.png" alt="Главная" className="h-7 w-7 object-contain" />
        </NavLink>

        <nav className="flex items-center gap-6 text-gray-900 text-base font-medium">
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `transition ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-900 hover:text-white'}`
            }
          >
            Каталог
          </NavLink>

          <span className="text-white/40">|</span>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              `transition ${isActive ? 'text-gray-900 font-bold' : 'text-gray-900 hover:text-white'}`
            }
          >
            История
          </NavLink>

          <span className="text-white/40">|</span>

          <NavLink
            to="/outfits"
            className={({ isActive }) =>
              `transition ${isActive ? 'text-gray-900 font-bold' : 'text-gray-900 hover:text-white'}`
            }
          >
            Аутфиты
          </NavLink>

          {user ? (
            <>
              <span className="text-white/40">|</span>
              <NavLink
                to="/profile"
                className="flex items-center gap-2 text-gray-900 hover:text-white transition font-medium"
              >
                <UserOutlined className="text-xl" />
                <span className="hidden md:inline">Профиль</span>
              </NavLink>

              <span className="text-white/40">|</span>
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 bg-amber-400 text-white rounded-md hover:bg-amber-600 transition text-sm font-medium"
              >
                Выйти
              </button>
            </>
          ) : (
            <>
              <span className="text-white/40">|</span>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `transition ${isActive ? 'text-gray-900 font-semibold' : 'text-gray-900 hover:text-white'}`
                }
              >
                Вход
              </NavLink>

              <span className="text-white/40">|</span>
              <NavLink
                to="/register"
                className="px-4 py-1.5 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition text-sm font-medium"
              >
                Регистрация
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}