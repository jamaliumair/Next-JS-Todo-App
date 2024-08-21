"use client";

import { useState } from "react";

type TodoEditType = {
    editedTodo: {todo: string; isComplete: boolean};
    saveEditedTodo: (updatedTodo: string) => void;
    
}

export default function TodoEdit({
    editedTodo,
    saveEditedTodo,
}: TodoEditType) {

    const [editTodo, setEditTodo] = useState(editedTodo.todo);
    

    return (
        <>
        <h1>Todo App</h1>
        <div className="inputContainer">
            <input
            className="todo-input"
                type="text"
                id="new-todo"
                value={editTodo}
                onChange={(e) => { setEditTodo(e.target.value) }}
            />
            <button
            className="add-btn"
                onClick={() => {
                    saveEditedTodo(editTodo);
                }}
            >Save Todo</button>
            </div>
        </>
    )
}