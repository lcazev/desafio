"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { getAllCharacters } from "@/server/characters";

interface UseGetCharactersProps {
  searchTerm?: string;
}

export default function useGetCharacters({searchTerm}: UseGetCharactersProps) {
  return useInfiniteQuery({
    queryKey: ["characters", searchTerm],
    queryFn: ({ pageParam = 1 }) =>
      getAllCharacters({
        pageParam,
        filters: searchTerm ? { name: searchTerm } : {},
      }),
    initialPageParam:1,
    getNextPageParam(lastPage) {
      if (lastPage.info.next) {
        const nextPage = new URL(lastPage.info.next).searchParams.get("page");
        return nextPage ? parseInt(nextPage, 10) : undefined;
      }
      return undefined;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}