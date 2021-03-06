import { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

import axios from 'axios'
const InputTodo = ({handleAddTodo}) => {
  const [description, setDescription] = useState('');

  const submitFormHandler = async e => {
    e.preventDefault();
    if (description === "") return  console.log("enter a value")
    try {
        const res = await axios.post('http://localhost:5000/todos', {description})
        handleAddTodo(res.data)
    } catch(err) {
        console.log(err.message)
    }
    setDescription('');
  };

  return (
    <form onSubmit={submitFormHandler}>
      <FormControl id="email">
        <Flex align="center">
        
        <FormLabel fontSize="4xl">To Do</FormLabel>
        <ColorModeSwitcher />
        </Flex>
        <Flex>
          <Input
            value={description}
            onChange={e => setDescription(e.target.value)}
            type="text"
            placeholder="What needs to be done?"
          />
          <Button type="submit" colorScheme="teal">
            Add
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
};

export default InputTodo;
