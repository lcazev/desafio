"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getAllCharacters } from "@/server/characters";
import { CharacterResult } from "@/models/characters";

interface UseGetCharactersProps {
  searchTerm?: string;
}
interface CharacterPage {
  results: CharacterResult[];
  info: {
    next: string | null;
    count: number;
  };
}
export default function useGetCharacters({ searchTerm }: UseGetCharactersProps) {
  return useInfiniteQuery<CharacterPage>({
    queryKey: ["characters", searchTerm],
    queryFn: ({ pageParam = 1 }) => {
      const pageNumber = typeof pageParam === 'number' ? pageParam : 1;
      return getAllCharacters({
        pageParam: pageNumber,
        filters: {
          ...(searchTerm ? { name: searchTerm } : {}),
        },
      });
    },
    initialPageParam: 1,
    getNextPageParam(lastPage) {
      if ( lastPage.info.next) {
        const nextPage = new URL(lastPage.info.next).searchParams.get("page");
        return nextPage ? parseInt(nextPage, 10) : undefined;
      }
      return undefined;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}