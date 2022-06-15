import { Box, Image, Flex } from "@chakra-ui/react";


export default function HeroImage()  {
    return (
              <Flex
    w={{
      base: "full",
      md: 10 / 12,
    }}
    mx="auto"
    mt={10}
    textAlign="center"
    align={"center"}
    flexDirection='column'

  >
    <Image
      w="full"
      width={[
        800
      ]}
      height={[
        "400px",
        "400px",
        "500px",
        "500px"
      ]}
      rounded="lg"
      
      src="/browser-light.png"
      alt="Hellonext feedback boards software screenshot"
    />
  </Flex>
      );
}
 
   