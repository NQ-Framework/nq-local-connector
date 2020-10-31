import React from "react";
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

export default function LoginPage(props: any) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex
      padding="10"
      height="100%"
      direction="column"
      align="center"
      justify="space-between"
    >
      {/* <img src="/assets/background.svg" /> */}
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
          Dobrodošli
        </Box>
        <Box as="h1" fontSize={["lg", "lg", "xl"]} textAlign="center">
          Ulogujte se na svoj nalog
        </Box>
        <Stack spacing={6} mt="4">
          <Stack>
            <Text fontSize="xs" ml="1">
              E-mail
            </Text>
            <InputGroup>
              <InputLeftElement
                children={<Icon name="email" color="gray.300" />}
              />
              <Input placeholder="Unesite e-mail" />
            </InputGroup>
          </Stack>
          <Stack>
            <Flex justify="space-between" width="100%">
              <Text fontSize="xs" ml="1">
                Lozinka
              </Text>
              <Link href="www.google.com" fontSize="xs">
                Zaboravili ste lozinku?
              </Link>
            </Flex>
            <InputGroup>
              <InputLeftElement
                children={<Icon name="lock" color="gray.300" />}
              />
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Unesite lozinku"
              />
              <InputRightElement>
                <Button
                  variant="ghost"
                  size="sm"
                  padding="0"
                  onClick={handleClick}
                >
                  <Icon name={show ? "view-off" : "view"}></Icon>
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Button variantColor="blue">Uloguj se</Button>
          <Text fontSize={["xs", "xs", "md"]}>
            Niste registrovani?{" "}
            <Link fontWeight="bold">Registrujte nalog 🡒</Link>
          </Text>
        </Stack>
      </Flex>
      <div>footer</div>
    </Flex>
  );
}
