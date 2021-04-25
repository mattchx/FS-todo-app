import { useEffect, useState, Fragment } from 'react';
import { Divider } from '@chakra-ui/react';
import axios from 'axios';
const ListTodo = () => {
  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:5000/todos');
    console.log(res.data);
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todos &&
        todos.map(item => {
          return (
            <Fragment key={item.todo_id}>
              <p>{item.description}</p>
              <Divider />
            </Fragment>
          );
        })}
    </div>
  );
};

export default ListTodo;
