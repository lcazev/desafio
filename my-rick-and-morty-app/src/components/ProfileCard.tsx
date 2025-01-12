import { Card, Image, IconButton, Box } from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; 

type ProfileCardProps = {
  name: string;
  gender: string;
  image: string;
  isFavourite?: boolean;
  onToggleFavourite?: () => void; 
};

const ProfileCard = ({ name, gender, image, isFavourite = false, onToggleFavourite }: ProfileCardProps) => {
  return (
    <Card.Root maxW="sm" border="1px solid gray" borderRadius="8px" position="relative">
      <Image src={image} alt="Avatar do personagem" />
      <Box position="absolute" top="4px" right="4px">
        <IconButton
          aria-label="Add to favourites"
          onClick={onToggleFavourite}
          background='white'
          color='black'
          size="lg"
        >{isFavourite ? <AiFillHeart color="red" /> : <AiOutlineHeart />}</IconButton>
      </Box>
      <Card.Body gap="2">
        <Card.Title fontFamily="creepster" fontSize="1.5rem">{name}</Card.Title>
        <Card.Description>{gender}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default ProfileCard;
