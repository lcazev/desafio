import { useQuery } from "@tanstack/react-query";
import { getAllCharactersByIds } from "@/server/charactersById";

interface UseGetCharactersByIdsProps {
  ids: number[];
}

interface UseGetCharactersByIdsProps {
    ids: number[];
  }
  
  export default function useGetCharactersByIds({ ids }: UseGetCharactersByIdsProps) {
    return useQuery({
        queryKey: ["charactersId", ids],
        queryFn: () => getAllCharactersByIds({ids})
    }
    );
  }
