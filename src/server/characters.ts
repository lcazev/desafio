export const getAllCharacters = async ({
  pageParam = 1,
  filters = {}, 
}: {
  pageParam?: number;
  filters?: { name?: string; }; 
}) => {
  const baseUrl = "https://rickandmortyapi.com/api/character";
    
    const queryParams = new URLSearchParams({
      page: pageParam.toString(),
      ...filters,  
    });

    const url = `${baseUrl}?${queryParams.toString()}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch characters");
  }

  return res.json();
};
