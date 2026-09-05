"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type AuthUser = {
  accessToken: string;
  refreshToken: string;
  userId: string;
  email: string;
  role: string;
};

type AuthState = {
  user: AuthUser | null;
  hasHydrated: boolean;
  setHasHydrated: () => void;
  setAuth: (user: AuthUser) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      hasHydrated: false,
      setHasHydrated: () => set({ hasHydrated: true }),
      setAuth: (user) => set({ user }),
      clearAuth: () => set({ user: null }),
    }),
    {
      name: "izu-auth",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => state?.setHasHydrated(),
    }
  )
);

export const getAccessToken = () => useAuthStore.getState().user?.accessToken;
