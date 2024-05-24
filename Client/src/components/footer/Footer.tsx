import { Flex, Heading, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Stack
      p="1.2rem"
      bg="#080124"
      color="#ddd"
      boxShadow="0 0 13px #0ed"
    >
      <Stack>
        <Heading textAlign="center">HF</Heading>
      </Stack>
      <Flex gap="1rem" justifyContent="center" alignItems="center">
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Hotels</Link>
        <Link to="/help">Help</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/policy">Policy</Link>
      </Flex>
    </Stack>
  );
};

export default Footer;
