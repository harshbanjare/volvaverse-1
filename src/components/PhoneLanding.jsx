import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const PhoneLanding = () => {
  return (
    <Box>
      <Box borderRadius="1.5rem" border="1px solid #A5A5A5" p="25px 7px">
        <Text
          textAlign="center"
          textTransform="uppercase"
          color="#3D3D3D"
          fontFamily="Azeret Mono"
          fontWeight="700"
          letterSpacing="2px"
          fontSize="1.8rem"
          lineHeight="81%"
          mb="15px"
        >
          Get your own metaverse scene
        </Text>
        <Text
          textAlign="center"
          fontFamily="Montserrat"
          fontWeight="500"
          fontSize=".8rem"
          lineHeight="115%"
          mb="20px"
        >
          lorem This expedient serves to get an idea of the finished product
          that will soon be printed or disseminated via digital channels. lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </Text>
        <Box display="flex" justifyContent="space-evenly">
          <Button
            bg="#F6A1C0"
            color="#3D3D3D"
            fontFamily="Montserrat"
            fontWeight="700"
            letterSpacing="1px"
            borderRadius=".5rem"
            className="btn5"
          >
            Get a Demo
          </Button>
          <Button
            bg="#745AC3"
            color="#FFF"
            fontFamily="Montserrat"
            fontWeight="700"
            letterSpacing="1px"
            borderRadius=".5rem"
            className="btn6"
          >
            Schedule call
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PhoneLanding;
