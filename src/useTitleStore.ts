import { create } from "zustand";

const useTitleStore = create<{
  title: string;
  setTitle: (arg0: string) => void;
}>((set) => ({
  title: "",
  setTitle: (newTitle: string) => set(() => ({ title: newTitle })),
}));

export default useTitleStore;
