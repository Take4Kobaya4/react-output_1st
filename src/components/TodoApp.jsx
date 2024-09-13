import React, {useState} from 'react';
import SearchBar from './SearchBar';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  // 検索バー
  const [searchQuery, setSearchQuery] = useState('');

  // Todo追加処理
  const addTodo = (text) =>{
    // 一意なID（Date.now()を使用しているため）を生成
    const newTodo = {id: Date.now(), text};
    setTodos([...todos, newTodo]);
  };

  // Todo削除
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 検索処理（日本語対応）
  const normalizeString = (str) =>{
    // 英数字を小文字化、半角スペースや全角スペースの削除
    return str.toLowerCase()
              .replace(/\s/g, '')
              .replace(/　/g, '');
  }

  const filteredTodos = todos.filter((todo) => 
    normalizeString(todo.text).includes(normalizeString(searchQuery))
  );

  return (
    <div className='App'>
      <h1>Todo リスト</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <AddTodo addTodo={addTodo}/>
      <TodoList todos={filteredTodos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default TodoApp;
