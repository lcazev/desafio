
import { Button, Group } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const Navbar
 = () => {
  return (
    <>
    <div className="w-full bg-background flex items-center justify-between">
      <div >
        <Image src="/logo.svg" alt="Ricky and Morty logo" width={114} height={64}/>

      </div>
      <div className="flex gap-4">
      <Group attached>
      <Button background="white" color="black" padding="1rem"><MdHome/>Início</Button>
      <Button padding="1rem"><FaHeart/>Favoritos</Button>
      </Group>
      </div>
    </div>
    </>
  );
};

export default Navbar
;