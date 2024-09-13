import React, {useState} from 'react';
import { TextField, Button } from '@mui/material';

const AddTodo = ({addTodo}) => {

    // 登録時値を保持していない
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTodo.trim()){
            addTodo(newTodo);
            setNewTodo('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
            variant="outlined"
            fullWidth
            placeholder="新しいTodoを追加"
            value={newTodo}
            margin="normal"
            onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button 
            type="submit"
            variant="contained"
            style={{ marginTop: '10px' }}
            >追加</Button>
        </form>
    );
}

export default AddTodo;