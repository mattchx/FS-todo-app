const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
// middleware
app.use(cors());
app.use(express.json()); // => allows us to access the req.body

// Routes //

// get all Todos

app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo ORDER BY todo_id');

    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(
        'SELECT * FROM todo WHERE todo_id = ($1)', [id]) 
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
// create a todo

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (description) VALUES ($1) RETURNING *',
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a todo as complete
app.put('/todos/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { complete } = req.body;

      const todo = await pool.query(
          'UPDATE todo SET complete = ($1) WHERE todo_id = ($2) RETURNING *;', [complete, id]) 
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

// delete a todo
app.delete('/todos/:id', async (req, res) => {
    try {
      const { id } = req.params;

      const deleteTodo = await pool.query(
          'DELETE FROM todo WHERE todo_id = ($1) RETURNING *;', [id]) 
      res.json(deleteTodo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
