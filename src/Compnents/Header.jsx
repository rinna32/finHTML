// src/components/Header.jsx
import { useAuth } from '../stores/authStore';
import { AntDesignOutlined } from '@ant-design/icons';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Avatar } from 'antd';
import AuthModal from './AuthModal';

export default function Header() {
  const { user, openRegister, logout } = useAuth();

  
  const menuItems = [
    {
      key: '1',
      label: (
        <div className="flex items-center gap-3 px-2 py-1">
          <UserOutlined />
          <span className="font-bold">{user?.name || 'Profile'}</span>
        </div>
      ),
    },
    {
      key: '2',
      danger: true,
      label: (
        <div onClick={logout} className="flex items-center gap-3">
          <LogoutOutlined />
          <span>Log Out</span>
        </div>
      ),
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
         
          <h1 className="text-2xl font-black tracking-tighter">
            YOURBRAND
          </h1>

         
          <div className="flex items-center gap-8">
            
            <nav className="hidden md:flex gap-10 text-sm font-bold tracking-wider">
              <a href="/" className="hover:text-red-500 transition">SHOP</a>
              <a href="/about" className="hover:text-red-500 transition">ABOUT</a>
              <a href="/contact" className="hover:text-red-500 transition">CONTACT</a>
            </nav>

            {/* Авторизация */}
            {user ? (
              <Dropdown menu={{ items: menuItems }} trigger={['click']} placement="bottomRight">
                <div className="cursor-pointer hover:scale-110 transition-transform">
                  <Avatar
                    size={40}
                    icon={<UserOutlined />}
                    className="bg-white text-black border-2 border-white shadow-lg"
                  />
                </div>
              </Dropdown>
            ) : (
              <button
                onClick={openRegister}
                className="border-2 border-white px-8 py-3 text-sm font-black tracking-widest hover:bg-white hover:text-black transition duration-300"
              >
                SIGN UP
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Отступ под фиксированный хедер */}
      <div className="h-20" />

      {/* Модалка авторизации */}
      <AuthModal />
    </>
  );
}