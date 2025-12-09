// src/Pages/OutfitsPage.jsx
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function OutfitsPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // Пока проверяем — показываем загрузку
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-600 text-xl">Проверка авторизации...</p>
      </div>
    );
  }

  // Если пользователь НЕ авторизован
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Создайте свой идеальный аутфит
        </h2>
        <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
          Авторизуйтесь или зарегистрируйтесь, чтобы сохранять любимые образы, создавать подборки и делиться ими.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate('/login')}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium"
          >
            Войти
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-6 py-3 bg-white border border-black text-black rounded-lg hover:bg-gray-50 transition font-medium"
          >
            Регистрация
          </button>
        </div>
      </div>
    );
  }

  // Если пользователь авторизован — показываем его аутфиты
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Ваши аутфиты, {user.name}!
        </h1>
        
        {/* Сюда позже вы добавите сетку аутфитов */}
        <div className="bg-white rounded-xl shadow p-8 text-center">
          <p className="text-gray-700 text-lg">
            У вас пока нет сохранённых аутфитов.  
            Начните создавать образы из каталога!
          </p>
        </div>
      </div>
    </div>
  );
}