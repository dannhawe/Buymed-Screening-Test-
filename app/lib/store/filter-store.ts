import { create } from "zustand";

interface FilterState {
  searchQuery: string;
  selectedCategory: string | null;
  // Actions
  setSearchQuery: (query: string) => void;
  setCategory: (category: string | null) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  searchQuery: "",
  selectedCategory: null,

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },

  setCategory: (category: string | null) => {
    set({ selectedCategory: category });
  },

  resetFilters: () => {
    set({ searchQuery: "", selectedCategory: null });
  },
}));
