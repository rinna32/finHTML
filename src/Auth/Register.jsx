import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/api";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await register(formData);


      if (res.success) {
        localStorage.setItem('token', res.token); 
        window.dispatchEvent(new Event('authChange')); 
        navigate('/');
      }
      else {
        setSuccess("Регистрация успешна! Перенаправляем…");


        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (err) {
      setError("Что-то пошло не так. Попробуйте позже.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Регистрация</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && <p className="text-green-600 text-center mb-4">{success}</p>}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Имя"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          name="password"
          type="password"
          placeholder="Пароль"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          onChange={handleChange}
          value={formData.password}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition mt-4 font-medium"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}