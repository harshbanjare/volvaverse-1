import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import Model1 from "./models/Model1";

const Services = () => {
  return (
    <Box mb="150px" className="s-mb">
      <Text
        color="#3D3D3D"
        fontFamily="Bebas Neue"
        fontWeight="400"
        lineHeight="normal"
        letterSpacing="4px"
        fontSize="3.2rem"
        mb="20px"
        className="se-txt"
      >
        OUR SERVICES
      </Text>

      {/* section 1 */}
      <Box>
        <Box
          bg="#F899BB"
          p="20px 25px 17px 25px"
          borderRadius="1.3rem"
          display="inline-block"
          position="relative"
          className="txt-cnt"
        >
          <Text
            fontFamily="Bebas Neue"
            fontWeight="400"
            color="#FFF"
            fontSize="2rem"
            textTransform="uppercase"
            letterSpacing="2px"
            className="se-s-txt"
          >
            Architecture
          </Text>
          <Box
            h="90px"
            w="90px"
            bg="#F899BB"
            bottom="-60px"
            right="-55px"
            position="absolute"
            className="sa-1"
          ></Box>

          <Box
            bg="#E5E9F2"
            h="70px"
            w="60px"
            borderBottomLeftRadius="1.3rem"
            position="absolute"
            top="0"
            right="-59px"
            className="sb-1"
          ></Box>
          <Box
            bg="#E5E9F2"
            h="70px"
            w="60px"
            borderTopRightRadius="1.3rem"
            position="absolute"
            bottom="-70px"
            right="15px"
            className="sb-2"
          ></Box>
        </Box>

        {/* 3d model-1 */}
        <Box
          display="flex"
          justifyContent="space-between"
          mt="-15px"
          className="m-cnt"
        >
          <Box
            minW="201px"
            className="m-g"
            pt={{ base: "17px", md: "50px" }}
            zIndex="20"
          >
            <Text
              w="201px"
              pe="10px"
              color="#3D3D3D"
              fontFamily="Montserrat"
              fontWeight="400"
              fontSize=".8rem"
              className="pc"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
            <Text
              w="115px"
              color="#3D3D3D"
              fontFamily="Montserrat"
              fontWeight="400"
              fontSize=".5rem"
              className="ph"
              pe="5px"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
          </Box>
          <Box
            zIndex="20"
            bg="#F899BB"
            w="100%"
            borderRightRadius="1.5rem"
            borderBottomLeftRadius="1.5rem"
            p="10px"
            className="mp"
          >
            {/* <Model1 /> */}
            <Image
              className="m-img"
              w="100%"
              borderRadius="1.5rem"
              src="/images/img6.png"
            />
          </Box>
        </Box>
      </Box>

      {/* section 2 */}
      <Box textAlign="end" mt="40px" className="s-mt">
        <Box
          bg="#745AC3"
          p="20px 25px 17px 25px"
          borderRadius="1.3rem"
          display="inline-block"
          position="relative"
          className="txt-cnt"
        >
          <Text
            fontFamily="Bebas Neue"
            fontWeight="400"
            color="#FFF"
            fontSize="2rem"
            textTransform="uppercase"
            letterSpacing="2px"
            className="se-s-txt"
          >
            Meeting Room
          </Text>
          <Box
            h="90px"
            w="90px"
            bg="#745AC3"
            bottom="-60px"
            left="-55px"
            position="absolute"
            className="sa-1"
          ></Box>

          <Box
            bg="#E5E9F2"
            h="70px"
            w="60px"
            borderBottomRightRadius="1.3rem"
            position="absolute"
            top="0"
            left="-59px"
            className="sb-3"
          ></Box>
          <Box
            bg="#E5E9F2"
            h="70px"
            w="60px"
            borderTopLeftRadius="1.3rem"
            position="absolute"
            bottom="-70px"
            left="15px"
            className="sb-4"
          ></Box>
        </Box>

        {/* 3d model 2 */}
        <Box
          display="flex"
          justifyContent="space-between"
          mt="-15px"
          className="m-cnt"
        >
          <Box
            zIndex="20"
            bg="#745AC3"
            borderLeftRadius="1.5rem"
            borderBottomRightRadius="1.5rem"
            p="10px"
            w="100%"
            className="mp"
          >
            <Image
              className="m-img"
              borderRadius="1.5rem"
              w="100%"
              src="/images/img7.png"
            />
          </Box>
          <Box
            minW="201px"
            className="m-g"
            pt={{ base: "17px", md: "50px" }}
            zIndex="20"
          >
            <Text
              w="201px"
              ps="10px"
              textAlign="start"
              color="#3D3D3D"
              fontFamily="Montserrat"
              fontWeight="400"
              fontSize=".8rem"
              className="pc"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
            <Text
              w="115px"
              textAlign="start"
              color="#3D3D3D"
              fontFamily="Montserrat"
              fontWeight="400"
              fontSize=".5rem"
              className="ph"
              ps="5px"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
