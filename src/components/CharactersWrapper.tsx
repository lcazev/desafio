"use client";

import React from "react";

import { CharacterResult } from "@/models/characters";
import ProfileCard from "./ProfileCard";
import { SimpleGrid } from "@chakra-ui/react";

type Props = {
  characters: CharacterResult[];
};

const CharactersWrapper = ({ characters }: Props) => {

  return (
    <>
      <SimpleGrid columns={[1, 2, 3]} gap={6} padding={4} overflow="auto" height="auto">
        {characters.map((character) =>
          character.results.map((characterInfo) => (
            <ProfileCard
              key={characterInfo.id}
              name={characterInfo.name}
              gender={characterInfo.gender}
              image={characterInfo.image}
            />
          ))
        )}
      </SimpleGrid>
    </>
  )
};

export default CharactersWrapper;