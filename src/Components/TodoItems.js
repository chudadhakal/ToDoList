// src/components/TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, index, markTodo, removeTodo, setReminder }) => {
    const [reminder, setLocalReminder] = useState(todo.reminder);

    const handleReminderChange = e => {
        setLocalReminder(e.target.value);
        setReminder(index, e.target.value);
    };

    return (
        <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            <span>{todo.text}</span>
            <div>
                {reminder && <span style={{ marginRight: '10px' }}>Reminder: {new Date(reminder).toLocaleString()}</span>}
                <input
                    type="datetime-local"
                    value={reminder || ''}
                    onChange={handleReminderChange}
                />
                <button onClick={() => markTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>Remove</button>
            </div>
        </div>
    );
};

export default TodoItem;
