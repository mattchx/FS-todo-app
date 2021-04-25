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
import { ColorModeSwitcher } from './ColorModeSwitcher';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Box width={500}>
          <ColorModeSwitcher />
          <FormControl id="email">
            <FormLabel fontSize="4xl">To Do</FormLabel>
            <Flex>
              <Input type="text" placeholder="What needs to be done?" />
              <Button colorScheme="teal">Add</Button>
            </Flex>
          </FormControl>
          <ListTodos />
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;

//border-radius: 15px 50px 30px 5px
