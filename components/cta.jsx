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
  IconButton,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";

import { MdEmail, MdOutlineEmail } from "react-icons/md";

const Cta = () => {
  const { hasCopied, onCopy } = useClipboard("wrinelabs@gmail.com");

  const { colorMode, toggleColorMode } = useColorMode();
  const btnBg = useColorModeValue("purple.100", "purple.100");
  const btnColor = useColorModeValue("gray.900", "gray.900");
  const btnHover = useColorModeValue("pink", "blue");
  const logInBoxBg = useColorModeValue("gray.200", "gray.900");
  return (
    <Flex
      id="contact"
      height={"90vh"}
      direction={"column"}
      alignItems="center"
      justifyContent={"center"}
    >


<Box  
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

          </Box>
        
            <Box>
      <Heading
        mt={8}
        color={useColorModeValue("gray.900", "gray.100")}
        size={"4xl"}
        mx='auto'
      >
        wrinelabs@gmail.com
      </Heading>
      </Box>
      <Box>
      <Tooltip
        label={hasCopied ? "Email Copied!" : "Copy Email"}
        closeOnClick={false}
        hasArrow
      >
        <IconButton
            mt={14}
          aria-label="email"
          variant="ghost"
          size="4xl"
          fontSize="3xl"
          icon={<MdEmail />}
          _hover={{
            bgGradient: "linear(to-r, green.100,purple.200)",
            color: useColorModeValue("white", "gray.700"),
          }}
          onClick={onCopy}
          isRound
        />
      </Tooltip>
      </Box>
    </Flex>
  );
};

export default Cta;
