import React from "react";
import { Stack, Image, Box, Text } from "@chakra-ui/react";
import bg from "assets/images/bg.jpg";

export default function Layout({ children }) {
  return (
    <Stack w="100%" position="relative">
      <Image src={bg} alt="" maxHeight="50vh" />
      <Box position="absolute" width="100%" textAlign="center" top="30%">
        <Text fontSize="xx-large" color="white" fontWeight="900">React Todo App</Text>
      </Box>
      {children}
    </Stack>
  );
}
