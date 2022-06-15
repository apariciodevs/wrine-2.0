import Navbar from "./Navbar";
import Footer from "./Footer.tsx";

import {  Box, useColorMode, useColorModeValue } from "@chakra-ui/react";




const Layout = ({ children }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const bg = useColorModeValue("gray.50", "gray.900");
    const bodyBg = useColorModeValue("gray.100", "gray.900")
    const color = useColorModeValue("gray.900", "gray.50");
  return(
    <Box width={'100vw'} min-height={'100vh'} bg={bodyBg}>
        <Navbar></Navbar>
        { children }
    </Box>
  )
};

export default Layout;
