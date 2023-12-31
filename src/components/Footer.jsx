import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      bg="#BAACE1"
      w="100vw"
      borderTopEndRadius="3rem"
      borderTopStartRadius="3rem"
      py="55px"
      className="foot"
    >
      {/* social icons  */}
      <Box
        display="flex"
        justifyContent="center"
        gap={{ base: "24.5px", md: "64px" }}
        className="social-links"
        mb="30px"
      >
        <a href="#" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M21.0191 0.253906H2.84042C1.27251 0.253906 0 1.52641 0 3.09433V21.273C0 22.8409 1.27251 24.1134 2.84042 24.1134H21.0191C22.587 24.1134 23.8595 22.8409 23.8595 21.273V3.09433C23.8595 1.52641 22.587 0.253906 21.0191 0.253906ZM7.38509 9.34325V20.1368H3.97659V9.34325H7.38509ZM3.97659 6.20175C3.97659 5.40643 4.65829 4.79858 5.68084 4.79858C6.70339 4.79858 7.34533 5.40643 7.38509 6.20175C7.38509 6.99706 6.74884 7.639 5.68084 7.639C4.65829 7.639 3.97659 6.99706 3.97659 6.20175ZM19.8829 20.1368H16.4744C16.4744 20.1368 16.4744 14.8764 16.4744 14.456C16.4744 13.3198 15.9064 12.1837 14.4861 12.1609H14.4407C13.0659 12.1609 12.4978 13.3312 12.4978 14.456C12.4978 14.973 12.4978 20.1368 12.4978 20.1368H9.08934V9.34325H12.4978V10.7975C12.4978 10.7975 13.5943 9.34325 15.7984 9.34325C18.0537 9.34325 19.8829 10.8941 19.8829 14.0356V20.1368Z"
              fill="#3B3B3B"
            />
          </svg>
        </a>
        <a href="#" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M13.7767 0C21.0586 0 26.9612 5.90262 26.9612 13.1844C26.9612 20.4663 21.0586 26.3689 13.7767 26.3689C6.4949 26.3689 0.592285 20.4663 0.592285 13.1844C0.592285 5.90262 6.4949 0 13.7767 0ZM18.3248 18.5585C18.5673 17.8145 19.7034 10.3991 19.8439 8.93791C19.8863 8.49537 19.7464 8.2013 19.4724 8.07003C19.1411 7.91067 18.6504 7.99035 18.0812 8.19557C17.3004 8.47703 7.31922 12.715 6.74254 12.9603C6.19568 13.1925 5.67862 13.4458 5.67862 13.8127C5.67862 14.0707 5.83167 14.2157 6.25357 14.3665C6.69267 14.523 7.79845 14.8583 8.45136 15.0383C9.0802 15.212 9.79618 15.0612 10.1974 14.8119C10.6228 14.5476 15.5314 11.263 15.884 10.9752C16.2359 10.6874 16.5168 11.056 16.229 11.3444C15.9413 11.6321 12.5718 14.9024 12.1275 15.3553C11.5881 15.905 11.971 16.4748 12.3327 16.703C12.7461 16.9632 15.7183 18.9569 16.166 19.2768C16.6137 19.5967 17.0677 19.7417 17.4833 19.7417C17.8989 19.7417 18.1179 19.1943 18.3248 18.5585Z"
              fill="#3B3B3B"
            />
          </svg>
        </a>
        <a href="#" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M8.14544 0.572266C4.03533 0.572266 0.693359 3.91424 0.693359 8.02434V18.3426C0.693359 22.4527 4.03533 25.7947 8.14544 25.7947H18.4637C22.5738 25.7947 25.9158 22.4527 25.9158 18.3426V8.02434C25.9158 3.91424 22.5738 0.572266 18.4637 0.572266H8.14544ZM20.1834 5.15816C20.814 5.15816 21.3299 5.67407 21.3299 6.30463C21.3299 6.93519 20.814 7.45111 20.1834 7.45111C19.5529 7.45111 19.0369 6.93519 19.0369 6.30463C19.0369 5.67407 19.5529 5.15816 20.1834 5.15816ZM13.3046 6.87787C16.7841 6.87787 19.6102 9.70393 19.6102 13.1835C19.6102 16.663 16.7841 19.4891 13.3046 19.4891C9.82502 19.4891 6.99896 16.663 6.99896 13.1835C6.99896 9.70393 9.82502 6.87787 13.3046 6.87787ZM13.3046 8.02434C10.4613 8.02434 8.14544 10.3402 8.14544 13.1835C8.14544 16.0267 10.4613 18.3426 13.3046 18.3426C16.1478 18.3426 18.4637 16.0267 18.4637 13.1835C18.4637 10.3402 16.1478 8.02434 13.3046 8.02434Z"
              fill="#3B3B3B"
            />
          </svg>
        </a>
        <a href="#" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M13.6579 0.173828C6.47317 0.173828 0.647949 5.99905 0.647949 13.1838C0.647949 20.3686 6.47317 26.1938 13.6579 26.1938C20.8427 26.1938 26.6679 20.3686 26.6679 13.1838C26.6679 5.99905 20.8427 0.173828 13.6579 0.173828ZM20.666 10.5113C20.6725 10.6555 20.6757 10.7986 20.6757 10.9418C20.6757 15.3521 17.3202 20.4347 11.1828 20.4347C9.29742 20.4347 7.54433 19.8829 6.06878 18.9353C6.33006 18.9668 6.59568 18.9808 6.86564 18.9808C8.43009 18.9808 9.86769 18.4485 11.0082 17.5519C9.54786 17.5248 8.31517 16.5599 7.89126 15.2351C8.09508 15.2741 8.30433 15.2947 8.51899 15.2947C8.82364 15.2947 9.11962 15.2535 9.39825 15.1776C7.87174 14.8719 6.72144 13.5232 6.72144 11.9067C6.72144 11.8926 6.72144 11.8785 6.72144 11.8644C7.17137 12.1148 7.68527 12.2644 8.23277 12.2818C7.33833 11.6844 6.74855 10.662 6.74855 9.50524C6.74855 8.89269 6.91226 8.31916 7.19956 7.82804C8.84532 9.84675 11.3042 11.1759 14.0764 11.3147C14.02 11.0708 13.9908 10.816 13.9908 10.5547C13.9908 8.71272 15.4848 7.21765 17.3268 7.21765C18.2862 7.21765 19.1536 7.62313 19.7618 8.27146C20.5218 8.12076 21.2362 7.8443 21.8813 7.46159C21.632 8.2411 21.1029 8.89377 20.4134 9.30792C21.0877 9.22769 21.7306 9.04881 22.3302 8.78319C21.8846 9.4532 21.3197 10.0397 20.666 10.5113Z"
              fill="#3B3B3B"
            />
          </svg>
        </a>
      </Box>

      {/* links  */}
      <Box
        display="flex"
        justifyContent="center"
        gap={{ base: "24px", md: "42px" }}
        className="footer-links"
        mb="20px"
      >
        <Link to="/">about us</Link>
        <Link to="/">contact us</Link>
        <Link to="/">pricing</Link>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        gap={{ base: "24px", md: "42px" }}
        className="footer-links"
        mb={{ base: "50px", md: "70px" }}
      >
        <Link to="/">terms of use</Link>
        <Link to="/">policy privacy</Link>
      </Box>

      {/* logo  */}
      <Box display="flex" gap="18px" justifyContent="center">
        <Image h="2.5rem" src="/images/logo1.png" />
        <Text
          color="#3B3B3B"
          fontSize="2.1rem"
          letterSpacing="6.4px"
          fontFamily="Bebas Neue"
          fontWeight="400"
          className="footer-txt"
        >
          VOLAVERSE
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
