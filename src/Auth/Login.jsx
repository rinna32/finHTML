import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Ошибка входа');

      localStorage.setItem('token', data.token || 'some-jwt-token');

      localStorage.setItem('user', JSON.stringify(data.data))

      window.dispatchEvent(new Event('authChange'))
      navigate('/', { replace: true });
    } catch (err) {
      setError(err.message || 'Не удалось войти');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <img
        src="/images/moscow_coverage.jpg"
        alt="Moscow background"
        className="fixed inset-0 w-full h-full object-cover -z-10"
      />
      <div className="relative min-h-screen flex items-center justify-center px-6">


        <div className="w-full max-w-md bg-white/20 rounded-3xl shadow-2xl py-16 px-10">


          <div className="text-center mb-14">
            <h1 className="text-4xl font-light text-gray-800 tracking-wide">NEOGOTH</h1>
          </div>


          <form onSubmit={handleSubmit} className="space-y-6">


            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-5 bg-blue-50 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:bg-blue-100 transition-all duration-200"
            />


            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-6 py-5 bg-blue-50 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:bg-blue-100 transition-all duration-200"
            />


            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-black text-white font-medium rounded-2xl hover:bg-gray-900 transition-all duration-200 disabled:opacity-70 mt-8"
            >
              {loading ? 'Входим...' : 'Login'}
            </button>
          </form>


          <div className="mt-12 text-center">
            <p className="text-black text-2xl ">
              Ещё нет аккаунта?{' '}
              <NavLink to="/register" className="text-black font-medium hover:text-amber-700">
                Регистрация
              </NavLink>
            </p>
          </div>

        </div>
      </div>
    </>
  );
}