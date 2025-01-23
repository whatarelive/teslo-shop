import { create } from "zustand";

interface State {
    isSideMenuOpen: boolean;
    openSideMenu: () => void;
}

export const useUiStore = create<State>()((set) => ({
    isSideMenuOpen: false,
    openSideMenu: () => set((state) => ({ isSideMenuOpen: !state.isSideMenuOpen }))
}))