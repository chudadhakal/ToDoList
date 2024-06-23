import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItems';

const TodoList = () => {

    const [todos, setTodos] = useState([
        {text: 'Learn React', isCompleted: false},
        {text: 'Meet friend for lunch', isCompleted: false},
        {text: 'Build a to-do app', isCompleted: false}
    ]);

    
    const addTodo = text => {
        const newTodo = {
            text,
            isCompleted: false,
            timestamp: Date.now() // Add timestamp when adding a new todo item
        };
        setTodos([...todos, newTodo]);
    };

    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    };

    return (
        <div className = "todo-list">
            <TodoForm addTodo = {addTodo} />
            {todos.map((todo, index) => (
                <TodoItem   
                    key ={index}
                    index = {index}
                    todo = {todo}
                    markTodo = {markTodo}
                    removeTodo = {removeTodo}
                    />
            )
            
            )}
        </div>
    );
};

export default TodoList;