import { Flex,  Text } from "@chakra-ui/react"

const Header2 = ({title}) => {
    return (
        <Flex bg="blue.400" direction="column" align="center">
            <div>
                <Text fontSize="6xl">{title}</Text>
            </div>
        </Flex>

    )
}


export default Header2
