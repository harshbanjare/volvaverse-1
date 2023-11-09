import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const SheduleCall = () => {
  return (
    <Box
      bg="rgba(248, 152, 185, 0.90)"
      display="flex"
      p="60px 75px"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="2.5rem"
      mb="100px"
    >
      <Text
        fontFamily="Montserrat"
        color="#3D3D3D"
        letterSpacing="4.5px"
        lineHeight="normal"
        fontSize="2.5rem"
      >
        What are you holding out for?
        <br /> Schedule meeting now!
      </Text>
      <Button
        bg="#745AC3"
        color="#FFFFFF"
        fontWeight="700"
        fontFamily="Montserrat"
        letterSpacing="2px"
        fontSize="1.8rem"
        py="30px"
        borderRadius="1rem"
        className="btn4"
      >
        Schedule call
      </Button>
    </Box>
  );
};

export default SheduleCall;
