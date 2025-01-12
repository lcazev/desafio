import { create } from 'zustand'

type SearchStore = {
    searchTerm: string;
    debouncedValue: string;
    setSearchTerm: (value: string) => void;
    setDebouncedValue: (value: string) => void;
  };

  export const useSearchStore = create<SearchStore>((set) => ({
    searchTerm: "",
    debouncedValue: "",
    setSearchTerm: (value) => set({ searchTerm: value }),
    setDebouncedValue: (value) => set({ debouncedValue: value }),
  }));