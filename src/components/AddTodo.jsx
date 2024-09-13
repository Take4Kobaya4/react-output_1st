import React, {useState} from 'react';

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
            <input
            type="text"
            placeholder="新しいTodoを追加"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit">追加</button>
        </form>
    );
}

export default AddTodo;