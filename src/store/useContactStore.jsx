import { create } from "zustand";

const useContactStore = create((set) => ({
  name: "",
  email: "",
  message: "",
  setContact: ({ name, email, message }) =>
    set(() => ({
      name,
      email,
      message,
    })),
}));

export default useContactStore;
