import React from 'react';
import { Button, ListItem } from "@mui/material";

const TodoItem = ({todo, deleteTodo}) => {
    return (
        <ListItem>
            {todo.text}
            <Button onClick={()=> deleteTodo(todo.id)} variant="contained" color="error">Delete</Button>
        </ListItem>
    );
}

export default TodoItem;