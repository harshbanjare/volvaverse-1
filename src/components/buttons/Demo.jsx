import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const Demo = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      {/* modal */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay backdropFilter="auto" backdropBlur="50px" />
        <ModalContent
          border="2.5px solid #3D3D3D"
          bg="#E5E9F2"
          borderRadius="2.2rem"
          px="30px"
        >
          <ModalHeader>
            <Text
              textAlign="center"
              fontFamily="Montserrat"
              fontWeight="700"
              color="#3D3D3D"
              fontSize="2.1rem"
              letterSpacing="3px"
            >
              Get a Demo
            </Text>
            <Text
              color="#3D3D3D"
              fontFamily="Montserrat"
              fontWeight="400"
              fontSize="11px"
              letterSpacing="1px"
            >
              Please fill the details to get customise immersive metaverse
              experience of your company
            </Text>
          </ModalHeader>
          <span className="modal-close-btn" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 83 83"
              fill="none"
            >
              <g clip-path="url(#clip0_1239_1959)">
                <path
                  d="M34.5822 48.4166L48.4154 34.5834M48.4154 48.4166L34.5822 34.5834M58.7903 58.7916C68.3007 49.2812 68.3007 33.7188 58.7903 24.2084C49.28 14.6981 33.7176 14.6981 24.2072 24.2084C14.6969 33.7188 14.6969 49.2812 24.2072 58.7916C33.7176 68.3019 49.28 68.3019 58.7903 58.7916Z"
                  stroke="#3D3D3D"
                  stroke-width="4.14991"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1239_1959">
                  <rect
                    width="58.6895"
                    height="58.6895"
                    fill="white"
                    transform="translate(0 41.5) rotate(-45)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel className="form-labels">Full name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Full name"
                className="form-inputs"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel className="form-labels">Company name</FormLabel>
              <Input placeholder="Company name" className="form-inputs" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel className="form-labels">Email address</FormLabel>
              <Input
                type="email"
                placeholder="Email address"
                className="form-inputs"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel className="form-labels">Interest</FormLabel>
              <Select placeholder="Interest" className="form-inputs">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel className="form-labels">Description</FormLabel>
              <Textarea
                placeholder="Give us a brief what you looking for..."
                className="form-inputs"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display="flex" justifyContent="center">
            <Button
              bg="#745AC3"
              color="#fff"
              px="20px"
              fontFamily="Montserrat"
              fontWeight="700"
              letterSpacing="1px"
              borderRadius="0.5rem"
              className="btn1"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Demo;
