import React, { useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/core";

export default function HomePage(props: any) {
  return (
    <Flex
      padding="10"
      height="100%"
      direction="column"
      align="center"
      justify="space-between"
    >
      <div>logo</div>
      <Flex
        bg="white"
        mt="2"
        direction="column"
        padding="6"
        width={["auto", "auto", "500px"]}
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"
      // border="1px solid black"
      >
        <Box fontSize={["xs", "xs", "md"]} textAlign="center">
          Dobrodošli u aplikaciju
        </Box>
      </Flex>
      <div>footer</div>
    </Flex>
  );
}
