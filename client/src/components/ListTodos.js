import { useEffect, useState } from 'react';
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

  return <div>{todos && todos.map(item => {
      return <p key={item.todo_id}>{item.description}</p>
  }) }</div>;
};

export default ListTodo;
