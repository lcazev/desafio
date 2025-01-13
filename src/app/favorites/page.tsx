"use client";
import { Box, Spinner, SimpleGrid, Text, Button } from "@chakra-ui/react";
import ProfileCard from "@/components/ProfileCard";
import NavbarHome from "@/components/NavbarHome";
import { useCharacterStore } from "@/hooks/useCharacterStore";
import useGetCharactersByIds from "@/hooks/useGetCharactersByIds";
import { CharacterResult } from "@/models/characters";
import Link from "next/link";

const FavoritesPage = () => {
  const { favoriteCharacterIds } = useCharacterStore();

  const { data, isFetching, } = useGetCharactersByIds({
    ids: favoriteCharacterIds,
  });

  const characters: CharacterResult[] = Array.isArray(data) ? data : [];

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="32rem">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="3rem"
      justifyContent="center"
      alignItems="center"
      justifySelf="center"
      width="100%"
      overflow="auto"
      height="auto"
      maxWidth="45rem"
      paddingTop="3rem"
    >
      <NavbarHome boxTitle="Favoritos" hasSearch={false} />
      {favoriteCharacterIds.length === 0 || !characters.length ? (
        <Box
          bg="background"
          justifyContent="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
          gap="1rem"
          height="32rem"
          borderRadius="8px"
          width="100%"
        >
          <Text fontSize="1.5rem" fontWeight="700" alignSelf="center">
            Parece que você ainda não tem favoritos
          </Text>
          <Text fontSize="1.125rem" alignSelf="center">
            Volte à página inicial e escolha os melhores para você.
          </Text>
          <Link href="/home">
            <Button bg="white" color="black" padding="0.5rem">
              Voltar ao início
            </Button>
          </Link>
        </Box>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} gap={6} padding={4} overflow="auto" height="auto">
         {characters?.map((character: CharacterResult) => {
           return (
            <ProfileCard
              key={character.id}
              id={character.id}
              name={character.name}
              gender={character.gender}
              image={character.image}
            />
          );
         })}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default FavoritesPage;
