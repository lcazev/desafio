import { Input, Box } from "@chakra-ui/react"
import { InputGroup } from "@/components/ui/input-group";
import { LuSearch } from "react-icons/lu"
import { NavbarHomeProps } from "@/models/searchProperties";

const NavbarHome = ({boxTitle, hasSearch}: NavbarHomeProps) => {
return (
<Box width="100%" display="flex" justifyContent="space-between" >
<p className="font-creepster text-text_blue text-5xl text-outline">{boxTitle}</p>
      {hasSearch && <InputGroup
        startElement={<LuSearch />}
      >
        <Input placeholder="Pesquisar" border='1px solid gray' />
      </InputGroup>
}
</Box>
)
}; export default NavbarHome;