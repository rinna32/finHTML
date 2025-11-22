// src/components/AuthModal.jsx
import { useState } from 'react';
import { useAuth } from '../stores/authStore';

export default function AuthModal() {
  const { isOpen, isLogin, close, toggleMode, login, register } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login(form.email, form.password);
      } else {
        await register(form.name, form.email, form.password);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Затемнение */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={close}
      />

      {/* Модалка */}
      <div className="relative w-full max-w-md">
        <div className="bg-black border-2 border-white p-10 rounded-none shadow-2xl">
          {/* Заголовок */}
          <h2 className="text-5xl font-black text-white tracking-tighter">
            {isLogin ? 'LOG IN' : 'SIGN UP'}
          </h2>

          {/* Форма */}
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {!isLogin && (
              <input
                type="text"
                placeholder="NAME"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b-2 border-white/30 text-white text-xl placeholder-white/40 focus:border-white focus:outline-none pb-2 transition"
                required
              />
            )}

            <input
              type="email"
              placeholder="EMAIL"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b-2 border-white/30 text-white text-xl placeholder-white/40 focus:border-white focus:outline-none pb-2 transition"
              required
            />

            <input
              type="password"
              placeholder="PASSWORD"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full bg-transparent border-b-2 border-white/30 text-white text-xl placeholder-white/40 focus:border-white focus:outline-none pb-2 transition"
              required
            />

            {/* Кнопка */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-black text-xl py-5 hover:bg-red-600 hover:text-white transition duration-300"
            >
              {loading ? 'WAIT...' : (isLogin ? 'ENTER' : 'CREATE')}
            </button>
          </form>

          {/* Ошибка */}
          {error && <p className="text-red-500 mt-4 font-bold">{error}</p>}

          {/* Переключатель */}
          <p className="text-white/60 text-center mt-8 text-sm">
            {isLogin ? "DON'T HAVE ACCOUNT?" : 'ALREADY REGISTERED?'}{' '}
            <button
              type="button"
              onClick={toggleMode}
              className="text-white font-black underline hover:text-red-500 transition"
            >
              {isLogin ? 'SIGN UP' : 'LOG IN'}
            </button>
          </p>

          {/* Крестик */}
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white/40 hover:text-white text-4xl font-light"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}