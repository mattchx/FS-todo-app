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
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Box width={500}>
          <ColorModeSwitcher />
          <InputTodo />
          <Center>
            <ListTodos />
          </Center>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;

//border-radius: 15px 50px 30px 5px
