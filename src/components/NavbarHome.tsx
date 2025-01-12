import { Input, Box } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { LuSearch } from "react-icons/lu";
import { NavbarHomeProps } from "@/models/searchProperties";
import { useDebouncedSearch } from "@/hooks/useDebouncedSearch";
import { useSearchStore } from "@/hooks/useStore";

const NavbarHome = ({ boxTitle, hasSearch }: NavbarHomeProps) => {
  const { searchTerm } = useSearchStore(); 
  const { onSearchChange } = useDebouncedSearch(500); 

  return (
    <Box width="100%" display="flex" justifyContent="space-between">
      <p className="font-creepster text-text_blue text-5xl text-outline">{boxTitle}</p>
      {hasSearch && (
        <InputGroup startElement={<LuSearch />}>
          <Input
            placeholder="Pesquisar"
            border="1px solid gray"
            value={searchTerm} 
            onChange={(e) => onSearchChange(e.target.value)} 
          />
        </InputGroup>
      )}
    </Box>
  );
};

export default NavbarHome;
