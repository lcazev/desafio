"use client";

import { useInView } from "react-intersection-observer";
import { Box, Text, Button, Spinner, SimpleGrid } from "@chakra-ui/react";
import { ResultsProps } from "@/models/searchProperties";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import { useEffect } from "react";
import { useSearchStore } from "@/hooks/useStore";
import useGetCharacters from "@/hooks/useGetCharacters";
import { CharacterResult } from "@/models/characters";

const Results = ({ title, description, hasButtonBack }: ResultsProps) => {
  const { ref, inView } = useInView();
  const { searchTerm = "" } = useSearchStore(); 

  const { data, isFetching, isFetchingNextPage, hasNextPage, fetchNextPage } = useGetCharacters({
    searchTerm
  });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage, inView]);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="32rem">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!data) {
    return (
      <Box
        bg="background"
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        gap="1rem"
        height="auto"
        width="100%"
        border="1px solid gray"
        borderRadius="8px"
      >
        <Text fontSize="1.5rem" fontWeight="700" alignSelf="center">
          {title}
        </Text>
        <Text fontSize="1.125rem" alignSelf="center">
          {description}
        </Text>
        {hasButtonBack && (
          <Link href="/">
            <Button bg="white" color="black" padding="0.5rem">
              Voltar ao início
            </Button>
          </Link>
        )}
      </Box>
    );
  }

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} gap={6} padding={4} overflow="auto" height="auto">
        {data?.pages.map((page) =>
          page.results.map((character: CharacterResult) => (
            <ProfileCard
              key={character.id}
              name={character.name}
              gender={character.gender}
              image={character.image}
            />
          ))
        )}
      </SimpleGrid>
      {isFetchingNextPage && (
        <Box display="flex" justifyContent="center" my={4}>
          <Spinner />
        </Box>
      )}
      <button ref={ref} onClick={() => fetchNextPage()}>
        carregar mais
      </button>
    </>
  );
};

export default Results;
