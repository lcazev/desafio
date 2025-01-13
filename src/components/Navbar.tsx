"use client";
import { usePathname } from "next/navigation";
import { Badge, Button, Group } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useCharacterStore } from "@/hooks/useCharacterStore";

const Navbar
 = () => {
  const pathname = usePathname();
  const isHome = pathname === '/home';
  const favoriteCharacterIds = useCharacterStore(state => state.favoriteCharacterIds)
  const favoritesCount = favoriteCharacterIds.length;
  return (
    <>
    <div className="w-full bg-background flex items-center justify-between">
      <div >
        <Image src="logo.svg" alt="Ricky and Morty logo" width={114} height={64}/>

      </div>
      <div className="flex gap-4">
      <Group attached>
      <Link href="/home"><Button background={isHome ? "white": "black"} color={isHome ? "black": "white"} padding="1rem" ><MdHome/>Início</Button></Link>
      <Link href="/favorites"><Button background={isHome ? "black": "white"} color={isHome ? "white": "black"} padding="1rem"><FaHeart/>Favoritos  {favoritesCount > 0 && (
                  <Badge ml={2} borderRadius="full" fontSize="sm" padding="0.2rem 0.4rem" bg={isHome ? "white": "black"} color={isHome ? "black": "white"}>
                    {favoritesCount}
                  </Badge>
                )}</Button></Link>
      </Group>
      </div>
    </div>
    </>
  );
};

export default Navbar
;