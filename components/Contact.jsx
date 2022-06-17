import { GridItem, Textarea, SimpleGrid, Link, Input, Flex, Button, Heading, Text , useColorMode, useColorModeValue} from "@chakra-ui/react"



const Contact  = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const btnBg = useColorModeValue("purple.100", "purple.100");
    const btnColor = useColorModeValue("gray.900", "gray.900");
    const btnHover = useColorModeValue("pink", "blue");
    const logInBoxBg = useColorModeValue("gray.200", "gray.900")
    return ( 
            <SimpleGrid height={'100vh'} columns={2} spacing={10} >
              
            <GridItem >
              <Heading mb={6}>Get in touch</Heading>
              <Input placeholder="email@gmail.com" variant="filled" mb={3} type="email"></Input>
              <Input placeholder="******" variant="filled" mb={6} type="password"></Input>
              <Textarea variant={'filled'} height={100} mb={8}  placeholder="message"></Textarea>
              <Button color={btnColor} variant={'solid'} mb={6} bg={btnBg}>Send</Button>
            </GridItem>
          </SimpleGrid> 
        )
     ;
}
 
export default Contact ;