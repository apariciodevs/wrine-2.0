import {
  Box,
  GridItem,
  Textarea,
  SimpleGrid,
  Link,
  Input,
  Flex,
  Button,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Contact = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const btnBg = useColorModeValue("purple.100", "purple.100");
  const btnColor = useColorModeValue("gray.900", "gray.900");
  const btnHover = useColorModeValue("pink", "blue");
  const logInBoxBg = useColorModeValue("gray.200", "gray.900");
  return (
    <Flex id="contact" height={'100vh'} direction={'column'} alignItems='center' justifyContent={'center'}>
      <Box   w={{
        base: "full",
        md: 11 / 12,
        xl: 9 / 12,
      }}
      mx="auto"
      textAlign={{
        base: "left",
        md: "center",
      }}
      p={2}
      >
       
          <Heading
            display={{
              base: "block",
              lg: "inline",
            }}
            fontSize={{
              base: "4xl",
              md: "6xl",
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            Let's work together
          </Heading>{" "}
          <Heading mt={8} color={useColorModeValue('gray.600', "gray.100")} size={'md'} >Feel free to leave us a message and we will contact you</Heading>
        </Box>

            <Box p={2}>
       
        <Input
          placeholder="Name"
          variant="filled"
          mb={8}
          type="Name"
        ></Input>
         <Input
          placeholder="wrinelabs@gmail.com"
          variant="filled"
          mb={8}
          type="email"
        ></Input>
        <Textarea
          variant={"filled"}
          bg='gray.300'
          height={100}
          mb={8}
          placeholder="message"
        ></Textarea>
        <Flex alignItems={'center'} justifyContent='center'>
        <Button px={12} color={btnColor} variant={"solid"} mb={6} bg={btnBg}>
          Send
        </Button>
        </Flex>
        </Box>
    </Flex>
  );
};

export default Contact;
