import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);


  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };


    checkLoginStatus();

    window.addEventListener('storage', checkLoginStatus);

    window.addEventListener('authChange', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
      window.removeEventListener('authChange', checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
    window.dispatchEvent(new Event('authChange'));
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex h-16 items-center justify-between px-6 transition-all duration-300 ${isHovered ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent'
          }`}
      >
        <NavLink
          to="/"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg transition-all hover:scale-110 active:scale-95"
        >
          <img src="/image.png" alt="Главная" className="h-7 w-7 object-contain" />
        </NavLink>

        <nav className="flex items-center gap-8 text-gray-900 text-base font-medium">
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

          {isLoggedIn ? (
            <>
              <span className="text-white/40">|</span>

              <NavLink
                to="/profile"
                className="flex items-center gap-2 text-gray-900 hover:text-white transition font-medium"
              >
                <NavLink
                  to="/profile">
                  <UserOutlined className="text-xl" />
                  <span className="hidden md:inline">Профиль</span>
                </NavLink>
              </NavLink>

              <span className="text-white/40">|</span>

              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
              >
                Выйти
              </button>
            </>
          ) : (
            <>
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
                className="px-5 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition font-medium"
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