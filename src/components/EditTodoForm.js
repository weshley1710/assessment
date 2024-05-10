import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          style={{width:'80%'}}
          value={value}
          InputProps={{
            style: { border: '1px solid #4799d7', background: 'transparent', marginBottom: '20px' },
            placeholder: 'Update Task',
            inputProps: { style: { color: '#ccc' } }
          }}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="contained" type="submit" style={{ backgroundColor: '#4799d7', color: 'white' }}>Update Task</Button>
    </form>
  )
}

export default EditTodoForm;
