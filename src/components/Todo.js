import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
      <div className='iconsForAction'>
        <EditNoteIcon onClick={() => editTodo(task.id)} />
        <DeleteIcon onClick={() => deleteTodo(task.id)} style={{marginLeft: '0.5rem'}}/>
      </div>
    </div>
  )
}

export default Todo
