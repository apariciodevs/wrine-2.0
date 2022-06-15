import { useState } from "react";


import { useColorMode, useColorModeValue } from "@chakra-ui/react";

const ColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [display, changeDisplay] = useState("none");
    const bg = useColorModeValue("gray.50", "gray.900");
    const color = useColorModeValue("gray.900", "gray.50");
    const bgBody = useColorModeValue("purple.900", "purple.100")
      return (
        <>
        </>
        );
};

export default ColorMode;
