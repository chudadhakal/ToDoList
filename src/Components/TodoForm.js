// src/components/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value.trim()) return; // Trim whitespace before checking if value is empty
        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '10px' }}>
            <input 
                type="text" 
                className="input" 
                value={value} 
                onChange={e => setValue(e.target.value)} 
                placeholder="Add a new task"
                style={{ flex: '1', padding: '12px', marginRight: '10px', borderRadius: '4px', border: '10px solid #ddd' }}
            />
            <button type="submit" style={{ padding: '15px', borderRadius: '50px', border: 'none', background: '#28a745', color: '#fff', cursor: 'pointer' }}>
                Add
            </button>
        </form>
    );
};

export default TodoForm;
