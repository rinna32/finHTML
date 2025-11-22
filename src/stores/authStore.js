// src/stores/authStore.js
import { create } from 'zustand';
import { api } from '../lib/api';

export const useAuth = create((set) => ({
  user: null,
  isOpen: false,
  isLogin: true, // true = вход, false = регистрация

  openLogin: () => set({ isOpen: true, isLogin: true }),
  openRegister: () => set({ isOpen: true, isLogin: false }),
  close: () => set({ isOpen: false }),

  toggleMode: () => set((state) => ({ isLogin: !state.isLogin })),

  login: async (email, password) => {
    const user = await api.login({ email, password });
    set({ user, isOpen: false });
    return user;
  },

  register: async (name, email, password) => {
    const user = await api.register({ name, email, password });
    set({ user, isOpen: false });
    return user;
  },

  logout: () => set({ user: null }),
}));