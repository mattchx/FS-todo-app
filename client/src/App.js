import { useEffect, useState } from 'react';
import { ChakraProvider, Center, theme, Box } from '@chakra-ui/react';
import axios from 'axios';
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
    console.error('useEffect runs');
    fetchTodos();
  }, []);

  const handleAddTodo = data => {
    setTodos([...todos, data]);
  };

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.todo_id !== id));
  };
  const handleCompletedTodo = item => {
    setTodos(
      todos.map(todo => {
        if (todo.todo_id === item.todo_id) {
          return item;
        }
        return todo;
      })
    );
  };

  return (
    <ChakraProvider theme={theme}>
      <Center>
        <Box width={500}>
          <InputTodo handleAddTodo={handleAddTodo} />
          <Center>
            <ListTodos
              todos={todos}
              handleDeleteTodo={handleDeleteTodo}
              handleCompletedTodo={handleCompletedTodo}
            />
          </Center>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;

//border-radius: 15px 50px 30px 5px
