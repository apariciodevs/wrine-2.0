import { Heading, Text } from "@chakra-ui/react";

const Heading = () => {
    return (     <Heading
        mb={6}
        fontSize={{
          base: "4xl",
          md: "6xl",
        }}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{
          base: "normal",
          md: "tight",
        }}
        color="gray.900"
        _dark={{
          color: "gray.100",
        }}
      >
        All your{" "}
        <Text
          display={{
            base: "block",
            lg: "inline",
          }}
          w="full"
          bgClip="text"
          bgGradient="linear(to-r, green.400,purple.500)"
          fontWeight="extrabold"
        >
          customer feedback
        </Text>{" "}
        in one single place.
      </Heading> );
}
 
export default Heading;