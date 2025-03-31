import {create} from 'zustand';

interface CounterStore {
  count: number;
  incrementBy: (value: number) => void;
}
export const useCounterStore = create<CounterStore>(set => ({
  count: 5,
  incrementBy: (value: number) => {
    set(state => ({count: state.count + value}));
  },
}));
