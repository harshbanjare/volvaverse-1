import React, { useEffect, useState } from "react";
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
import { jelly } from "ldrs";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const handleModelLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    jelly.register();
    Aos.init();

    // const loadingTimeout = setTimeout(() => {
    //   setIsLoaded(true);
    // }, 2000);

    // return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  // console.log(loading);

  return (
    <>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <l-jelly size="50" speed="1" color="#745AC3"></l-jelly>
        </Box>
      ) : (
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
            <Services onModelLoad={handleModelLoad} />
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
      )}
    </>
  );
};

export default Home;
