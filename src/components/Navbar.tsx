"use client";
import { usePathname } from "next/navigation";
import { Button, Group } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar
 = () => {
  const pathname = usePathname();
  const isHome = pathname === '/home';
  return (
    <>
    <div className="w-full bg-background flex items-center justify-between">
      <div >
        <Image src="logo.svg" alt="Ricky and Morty logo" width={114} height={64}/>

      </div>
      <div className="flex gap-4">
      <Group attached>
      <Link href="/"><Button background={isHome ? "white": "black"} color={isHome ? "black": "white"} padding="1rem" ><MdHome/>Início</Button></Link>
      <Link href="/favourites"><Button background={isHome ? "black": "white"} color={isHome ? "white": "black"} padding="1rem"><FaHeart/>Favoritos</Button></Link>
      </Group>
      </div>
    </div>
    </>
  );
};

export default Navbar
;