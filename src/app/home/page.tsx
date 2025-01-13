"use client";

import { Box, Spinner, SimpleGrid, Text } from "@chakra-ui/react";
import ProfileCard from "@/components/ProfileCard";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useSearchStore } from "@/hooks/useStore";
import useGetCharacters from "@/hooks/useGetCharacters";
import { CharacterResult } from "@/models/characters";
import NavbarHome from "@/components/NavbarHome";

const Home = () => {
  const { searchTerm = "" } = useSearchStore();
  const { ref, inView } = useInView();

  const {
    data,
    isError,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGetCharacters({ searchTerm: searchTerm ? searchTerm : "" });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

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
      <NavbarHome boxTitle="Início" hasSearch={true} />
      {isError ? (
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
            Nada foi encontrado
          </Text>
          <Text fontSize="1.125rem" alignSelf="center">
            Tente realizar uma nova busca
          </Text>
        </Box>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} gap={6} padding={4} overflow="auto" height="auto">
          {data?.pages.map((page) =>
            page.results.map((character: CharacterResult) => (
              <ProfileCard
                key={character.id}
                id={character.id}
                name={character.name}
                gender={character.gender}
                image={character.image}
              />
            ))
          )}
        </SimpleGrid>
      )}
      {isFetchingNextPage && (
        <Box display="flex" justifyContent="center" my={4}>
          <Spinner />
        </Box>
      )}
      {hasNextPage && (
        <button ref={ref} onClick={() => fetchNextPage()} >
        carregar mais
      </button>
      )}
    </Box>
  );
};

export default Home;
