import React, { useEffect } from "react";
import Footer from "../components/Footer";
import SheduleCall from "../components/SheduleCall";
import Services from "../components/Services";
import { Box } from "@chakra-ui/react";
import About from "../components/About";
import Landing from "../components/Landing";
import PhoneLanding from "../components/PhoneLanding";
import PhoneHeader from "../components/PhoneHeader";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Box bg="#E5E9F2">
      <Box px="100px" className="pd">
        <Landing />
      </Box>

      {/* small devices header */}

      <Box className="ph">
        <PhoneHeader />
      </Box>

      {/* small-view */}
      <Box className="ph" px="10px" pt="120px" mb="100px">
        <PhoneLanding />
      </Box>

      {/* about */}
      <Box id="about" px="100px" mb="65px" pt="50px" className="pd">
        <About />
      </Box>

      {/* services */}
      <Box px="100px" className="pd">
        <Services />
      </Box>

      {/* schedule call */}

      <Box px="100px" className="pd">
        <SheduleCall />
      </Box>

      {/* footer */}
      <Box data-aos="fade-up" data-aos-duration="1000">
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
