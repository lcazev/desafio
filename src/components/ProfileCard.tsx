import { useCharacterStore } from "@/hooks/useCharacterStore";
import { Card, Image, IconButton, Box } from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; 

type ProfileCardProps = {
  id: number;
  name: string;
  gender: string;
  image: string;
};

const ProfileCard = ({ name, gender, image, id}: ProfileCardProps) => {
  const { favoriteCharacterIds, addFavoriteCharacter, removeFavoriteCharacter } = useCharacterStore();
  const isFavorite = favoriteCharacterIds.includes(id);
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavoriteCharacter(id);
    } else {
      addFavoriteCharacter(id);
    }
  };

  return (
    <Card.Root maxW="sm" border="1px solid gray" borderRadius="8px" position="relative">
      <Image src={image} alt="Avatar do personagem" />
      <Box position="absolute" top="4px" right="4px">
        <IconButton
          aria-label="Add to favorites"
          onClick={handleFavoriteClick}
          background='white'
          color='black'
          size="lg"
        >{isFavorite ? <AiFillHeart color="black" /> : <AiOutlineHeart />}</IconButton>
      </Box>
      <Card.Body gap="2">
        <Card.Title fontFamily="creepster" fontSize="1.5rem">{name}</Card.Title>
        <Card.Description>{gender}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default ProfileCard;
