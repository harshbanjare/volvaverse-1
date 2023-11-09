import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Demo from "./buttons/Demo";

const Landing = () => {
  return (
    <Box minHeight="100vh" w="100%">
      <Box position="absolute" display="flex">
        <Box
          bg="#E5E9F2"
          w="100px"
          h="100px"
          position="absolute"
          top="95.5px"
          right="94px"
          zIndex="2"
          borderTopRightRadius="2.5rem"
        ></Box>
        <Box
          bg="#F6A1C0"
          w="100px"
          h="100px"
          position="absolute"
          right="50px"
          top="50px"
        ></Box>
        <Box
          bg="#F6A1C0"
          h="95.5px"
          top="0"
          p="20px 20px"
          borderBottomLeftRadius="2.5rem"
          zIndex="10"
        >
          <Box display="flex" alignItems="center" gap="15px">
            <Image h="2.5rem" src="/images/logo1.png" />
            <Text
              color="#3B3B3B"
              fontSize="2.1rem"
              fontFamily="Bebas Neue"
              fontWeight="400"
              letterSpacing="6.4px"
              mt="5px"
            >
              VOLAVERSE
            </Text>
          </Box>
        </Box>
        <Box
          bg="#E5E9F2"
          borderBottomLeftRadius="2.5rem"
          h="115px"
          w="100px"
          zIndex="2"
        ></Box>
      </Box>
      <Box
        position="absolute"
        top="115px"
        h="500px"
        w="500px"
        zIndex="3"
        display="flex"
      >
        <div className="img-1"></div>
        <Box
          bg="#F6A1C0"
          h="190px"
          w="210px"
          borderBottomRadius="2.5rem"
          borderTopRightRadius="2.5rem"
          ml="24px"
        >
          <Image src="/images/img2.png" />
          <Box display="flex" justifyContent="center" mt="-13px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="160"
              height="35"
              viewBox="0 0 228 35"
              fill="none"
            >
              <g filter="url(#filter0_f_1245_1105)">
                <ellipse cx="114" cy="17.5" rx="102" ry="5.5" fill="#E66793" />
              </g>
              <defs>
                <filter
                  id="filter0_f_1245_1105"
                  x="0"
                  y="0"
                  width="228"
                  height="35"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="6"
                    result="effect1_foregroundBlur_1245_1105"
                  />
                </filter>
              </defs>
            </svg>
          </Box>
        </Box>
      </Box>

      {/* nav-links */}
      <Box
        display="flex"
        justifyContent="end"
        gap="50px"
        className="head-links"
      >
        <HashLink to="/#about">about us</HashLink>
        <Link to="/">schedule call</Link>
      </Box>

      {/* main right div */}
      <Box display="flex" justifyContent="between" mt="40px">
        <Box minWidth="505px"></Box>
        <Box border="1.5px solid #A5A5A5" borderRadius="2.5rem" p="30px 20px">
          <Text
            color="#3D3D3D"
            textTransform="uppercase"
            fontFamily="Azeret Mono"
            fontWeight="700"
            letterSpacing="5px"
            fontSize="5rem"
            lineHeight="86%"
            mb="20px"
          >
            Get your own metaverse scene
          </Text>
          <Text color="#000" fontFamily="Montserrat" fontWeight="500" mb="35px">
            lorem This expedient serves to get an idea of the finished product
            that will soon be printed or disseminated via digital channels.
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum
            lorem ipsum lorem
          </Text>
          <Demo>
            <Button
              className="btn2"
              color="#3D3D3D"
              fontFamily="Montserrat"
              fontWeight="700"
              letterSpacing="1.5px"
            >
              Get a Demo
            </Button>
          </Demo>
          <Button
            color="#FFF"
            className="btn3"
            fontFamily="Montserrat"
            fontWeight="700"
            letterSpacing="1.5px"
          >
            Schedule call
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
