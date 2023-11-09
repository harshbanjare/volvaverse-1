import React from "react";
import Footer from "../components/Footer";
import SheduleCall from "../components/SheduleCall";
import Services from "../components/Services";
import { Box } from "@chakra-ui/react";
import About from "../components/About";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <Box bg="#E5E9F2">
      <Box px="45px">
        <Landing />
      </Box>

      {/* about */}
      <Box id="about" px="45px" mb="65px">
        <About />
      </Box>

      {/* services */}
      <Box px="45px">
        <Services />
      </Box>

      {/* schedule call */}

      <Box px="45px">
        <SheduleCall />
      </Box>

      {/* footer */}
      <Footer />
    </Box>
  );
};

export default Home;
