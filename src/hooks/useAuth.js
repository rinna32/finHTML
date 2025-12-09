
import { useState, useEffect } from 'react';

export function useAuth() {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);


    // src/hooks/useAuth.js
    const checkAuth = () => {
        const token = localStorage.getItem('token');
        const userStr = localStorage.getItem('user');

        if (token && userStr) {
            try {
                const raw = JSON.parse(userStr);
                // Поддерживаем оба формата: { name } и { success, data: { name } }
                const userData = raw.data || raw;
                setUser(userData);
            } catch (e) {
                console.error('Ошибка парсинга пользователя', e);
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setUser(null);
            }
        } else {
            setUser(null);
        }
        setLoading(false);
    };

    useEffect(() => {
        checkAuth();


        const handleAuthChange = () => checkAuth();
        window.addEventListener('authChange', handleAuthChange);


        return () => {
            window.removeEventListener('authChange', handleAuthChange);
        };
    }, []);


    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);

        window.dispatchEvent(new Event('authChange'));
    };


    return { user, loading, logout };
}