import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';

const App= () => {
  return (
      <div className ="app">
        <h1>To-Do List</h1>
        <TodoList/>
      </div>

  );
};

export default App;