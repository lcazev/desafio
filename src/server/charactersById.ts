export async function getAllCharactersByIds({ ids }: { ids: number[] }) {
    const baseUrl = "https://rickandmortyapi.com/api/character";

    const response = await fetch(`${baseUrl}/${ids.join(",")}`);
    const data = await response.json();
    return data;
  }
  