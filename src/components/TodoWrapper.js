import React from 'react'
import TodoForm from './TodoForm.js'
import Todo from './Todo.js'
import {v4 as uuidv4} from 'uuid'
import EditTodoForm from './EditTodoForm.js';

import { useGlobalState } from './GlobalState.js';



const TodoWrapper = () => {
  const {globalState, set} = useGlobalState();
  console.log("Global State:", globalState);
  

  const addTodo = todo => {
    set({
      todos: [...globalState.todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]
    });
  }

  const toggleComplete = id => {
    set({
      todos: globalState.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    });
  }

  const deleteTodo = id => {
    set({
      todos: globalState.todos.filter(todo => todo.id !== id)
    });
  }

  const editTodo = id => {
    set({
      todos: globalState.todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
    });
  }

  const editTask = (task, id) => {
    set({
      todos: globalState.todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)
    });
  }

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done</h1>
      <TodoForm addTodo={addTodo} />
      {globalState.todos.map((todo, index) => ( todo.isEditing ? (<EditTodoForm editTodo={editTask} task={todo} />) : (
        <Todo task={todo} keys={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
    )))}
    </div>
  )
}

export default TodoWrapper;


