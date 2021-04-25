import React from 'react';
import {
  ChakraProvider,
  Center,
  theme,
  FormControl,
  FormLabel,
  Box,
  FormHelperText,
  Input,
  Button,
  Flex,
  useStyleConfig,
} from '@chakra-ui/react';

const InputTodo = () => {
  return (
    <FormControl id="email">
      <FormLabel fontSize="4xl">To Do</FormLabel>
      <Flex>
        <Input type="text" placeholder="What needs to be done?" />
        <Button colorScheme="teal">Add</Button>
      </Flex>
    </FormControl>
  );
};

export default InputTodo;
