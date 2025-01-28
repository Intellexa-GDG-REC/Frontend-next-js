import { create } from 'zustand'

interface AuthState {
  user: {
    username: string,
    banned: boolean,
    user_url: string,
    avatar_url: string,
  } | null;
  setUser: (user: any) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}))