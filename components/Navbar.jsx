import { useState } from "react";
import {
  useColorMode,
  useColorModeValue,
  Switch,
  Flex,
  Button,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  const bg = useColorModeValue("gray.50", "gray.900");
  const bodyBg = useColorModeValue("gray.100", "gray.900")
  const color = useColorModeValue("gray.900", "gray.50");

  return (
    <div>
      <Flex>
        <Flex
          margin={"auto"}
          width="90%"
          justifyContent={"space-around"}
          height={"12vh"}
          right="1rem"
          align="center"
        >
          {/* Desktop */}

          <Flex flex={1} ml={"0"}>
            <Heading size={"lg"}>Wrine .</Heading>
          </Flex>
          <Flex
            alignItems={"center"}
            display={["none", "none", "flex", "flex"]}
          >
            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Home
              </Button>
            </NextLink>

            <NextLink href="/about" passHref>
              <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
                About
              </Button>
            </NextLink>

            <NextLink href="/contact" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Contact"
                my={5}
                w="100%"
              >
                Contact
              </Button>
            </NextLink>
          </Flex>

          {/* Mobile */}
          <Flex
            right="1rem"
            alignItems={"center"}
            mr="10px"
            justifyContent={"space-around"}
          >
            <IconButton
              aria-label="Open Menu"
              size="lg"
              mr={2}
              icon={<HamburgerIcon />}
              onClick={() => changeDisplay("flex")}
              display={["flex", "flex", "none", "none"]}
            />
            <Switch ml={"2rem"} isChecked={isDark} onChange={toggleColorMode} />
          </Flex>
        </Flex>

        {/* Mobile Content */}
        <Flex
          w="100vw"
          display={display}
          zIndex={20}
          h="100vh"
          bg={bg}
          color={color}
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Open Menu"
              size="lg"
              icon={<CloseIcon />}
              onClick={() => changeDisplay("none")}
            />
          </Flex>

          <Flex flexDir="column" align="center">
            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Home
              </Button>
            </NextLink>

            <NextLink href="/about" passHref>
              <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
                About
              </Button>
            </NextLink>

            <NextLink href="/contact" passHref>
              <Button
                as="a"
                variant="ghost"
                aria-label="Contact"
                my={5}
                w="100%"
              >
                Contact
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}
