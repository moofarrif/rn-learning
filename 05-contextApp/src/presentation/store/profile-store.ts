import {create} from 'zustand';

export interface ProfileState {
  name: string;
  email: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
}

export const useProfileStore = create<ProfileState>(set => ({
  name: 'Jhon Doe',
  email: 'jhon@yopmail.com',
  setName: (name: string) => set({name}),
  setEmail: (email: string) => set({email}),
}));
