import React from 'react';
import TodoItem from './TodoItem';
import { List } from '@mui/material';

const TodoList = ({todos, deleteTodo}) => {
    return (
        <List>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
            ))}
        </List>
    );
}

export default TodoList;