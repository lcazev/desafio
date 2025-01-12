import { ResultsProps } from "@/models/searchProperties";
import { Box, Text, Button } from "@chakra-ui/react";

const Results = ({title, description, hasButtonBack}: ResultsProps) => {
    return (
        <Box bg="background" justifyContent="center" display="flex" flexDirection="column"gap="1rem" height="32rem" width="100%" border="1px solid gray" borderRadius="8px">
            <Text fontSize="1.5rem" fontWeight="700" alignSelf="center">{title}</Text>
            <Text fontSize="1.125rem" alignSelf="center">{description}</Text>
            {hasButtonBack && <Button bg="white">Voltar ao início</Button>}
        </Box>
    )
}; export default Results;