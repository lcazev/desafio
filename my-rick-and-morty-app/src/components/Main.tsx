"use client";
import { usePathname } from "next/navigation";
import NavbarHome from "@/components/NavbarHome";
import Results from "@/components/Results";
import { Box } from "@chakra-ui/react";
import { PageTextMap } from "@/models/searchProperties";

const pageTextMap: Record<
  string,
  PageTextMap
> = {
  "/home": {
    boxTitle: "Início",
    title: "Nada foi encontrado",
    description: "Tente realizar uma nova busca",
    hasSearch: true,
  },
  "/favourites": {
    boxTitle: "Favoritos",
    title: "Parece que você ainda não tem favoritos",
    description: "Volte à página inicial e escolha os melhores para você.",
    hasButtonBack: true,
    hasSearch: false,
  },
};

const Main = () => {
  const pathname = usePathname();
  const { boxTitle, title, description, hasButtonBack, hasSearch } = pageTextMap[pathname] || pageTextMap["/home"];
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
      <NavbarHome boxTitle={boxTitle} hasSearch={hasSearch}/>
      <Results title={title} description={description} hasButtonBack={hasButtonBack}/>
    </Box>
  );
};
export default Main;
