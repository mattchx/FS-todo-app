import { useEffect, useState } from 'react';
import { ChakraProvider, Center, theme, Box } from '@chakra-ui/react';
import axios from 'axios';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5000/todos');
    const todosState = res.data.map(item => ({
      ...item,
      editing: false,
    }));
    console.log(todosState);
    setTodos(todosState);
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

  const handleEditingState = (id, state) => {
    setTodos(
      todos.map(item => {
        if (item.todo_id === id) {
          return { ...item, editing: state };
        }
        return item;
      })
    );
  };

  const handleUpdatedTodo = todo => {
    console.log(todo);
    setTodos(
      todos.map(item => {
        if (item.todo_id === todo.todo_id) {
          return todo;
        } else {
          return item;
        }
      })
    );
  };

  return (
    <ChakraProvider theme={theme}>
      <Center mt={20}>
        <Box width={500}>
          <InputTodo handleAddTodo={handleAddTodo} />
          <Center>
            <ListTodos
              todos={todos}
              handleDeleteTodo={handleDeleteTodo}
              handleCompletedTodo={handleCompletedTodo}
              handleEditingState={handleEditingState}
              handleUpdatedTodo={handleUpdatedTodo}
            />
          </Center>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
