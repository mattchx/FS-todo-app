import { useEffect, useState } from 'react';
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
import axios from 'axios';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5000/todos');
    //console.log(res.data);
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAddTodo = () => {
    fetchTodos()
  };

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.todo_id !== id));
  };

  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Box width={500}>
          <ColorModeSwitcher />
          <InputTodo handleAddTodo={handleAddTodo} />
          <Center>
            <ListTodos todos={todos} handleDeleteTodo={handleDeleteTodo} />
          </Center>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;

//border-radius: 15px 50px 30px 5px
