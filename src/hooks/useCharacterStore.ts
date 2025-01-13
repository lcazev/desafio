import { create } from "zustand";

interface CharacterStore {
  favoriteCharacterIds: number[];
  addFavoriteCharacter: (id: number) => void;
  removeFavoriteCharacter: (id: number) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  favoriteCharacterIds: [],
  addFavoriteCharacter: (id) => set((state) => ({
    favoriteCharacterIds: [...state.favoriteCharacterIds, id],
  })),
  removeFavoriteCharacter: (id) => set((state) => ({
    favoriteCharacterIds: state.favoriteCharacterIds.filter(characterId => characterId !== id),
  })),
}));
