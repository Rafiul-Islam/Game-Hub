import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

interface GameStore {
  gameQuery: GameQuery;
  onSearch: (searchText: string) => void;
  onSelectGenre: (genreId: number) => void;
  onSelectPlatform: (platformId: number) => void;
  onSelectSortOrder: (sortOrder: string) => void;
}

const useGameStore = create<GameStore>((set) => ({
  gameQuery: {} as GameQuery,
  onSearch: (searchText) =>
    set(() => ({ gameQuery: { searchText } as GameQuery })),
  onSelectGenre: (genreId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, genreId },
    })),
  onSelectPlatform: (platformId) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId },
    })),
  onSelectSortOrder: (sortOrder) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, sortOrder },
    })),
}));

export default useGameStore;
