import { Box, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box
      w="100%"
      p="35px 20px 50px 20px"
      border="1.5px solid #A5A5A5"
      borderRadius="1.5rem"
      className="abt-wrap"
    >
      <Text
        fontFamily="Azeret Mono"
        fontWeight="700"
        color="#3D3D3D"
        letterSpacing="6px"
        fontSize="3rem"
        mb="10px"
        className="abt-head"
      >
        ABOUT US
      </Text>
      <Text
        color="#3D3D3D"
        fontFamily="Montserrat"
        fontWeight="500"
        letterSpacing="1px"
        fontSize="1.1rem"
        className="abt-p"
      >
        lorem This expedient serves to get an idea of the finished product that
        will soon be printed or disseminated via digital channels. lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem This expedient
        serves to get an idea of the finished product that will soon be printed
        or disseminated via digital channels. lorem ipsum lorem ipsum lorem
        ipsum lorem ipsum lorem ipsum
      </Text>
    </Box>
  );
};

export default About;
