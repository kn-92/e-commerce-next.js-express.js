import { create } from "zustand";
import { State } from "./types";

const useStore = create<State>((set) => ({
  isUserLoggedIn: false,
  setIsUserLoggedIn: () =>
    set((state) => ({ isUserLoggedIn: !state.isUserLoggedIn })),
}));

export default useStore;
