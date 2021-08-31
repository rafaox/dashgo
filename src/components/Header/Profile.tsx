import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData ?? (
        <Box mr="4" textAlign="right">
          <Text>Rafael Cardoso</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >rflcardoso90@gmail.com</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Rafael Cardoso"
        src="https://github.com/rafaox.png"
      />
    </Flex>
  );
}