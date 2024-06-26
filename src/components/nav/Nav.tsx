import { Heading, Link, Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode;
}

const Nav = ({ heading, children }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      boxShadow=" 0 0 13px #0ef"
      marginBottom="2rem"
      p="1.6rem"
    >
      <Heading>{heading}</Heading>
      <Link>{children}</Link>
    </Stack>
  );
};

export default Nav;
