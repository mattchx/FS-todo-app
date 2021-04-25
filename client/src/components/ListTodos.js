import { Fragment } from 'react';
import { Divider, Flex, Button, Spacer, Box } from '@chakra-ui/react';
import axios from 'axios';

const ListTodo = ({todos, handleDeleteTodo}) => {
  const deleteTodo = async id => {
    try {
      await axios.delete(`http://localhost:5000/todos/${id}`);
      handleDeleteTodo(id);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Box minW={300}>
      {todos &&
        todos.map(item => {
          return (
            <Fragment key={item.todo_id}>
              <Flex mt={3}>
                <p>{item.description}</p>
                <Spacer />
                <Button
                  onClick={() => deleteTodo(item.todo_id)}
                  size="xs"
                  colorScheme="red"
                >
                  Delete
                </Button>
              </Flex>
              <Divider m={3} />
            </Fragment>
          );
        })}
    </Box>
  );
};

export default ListTodo;
