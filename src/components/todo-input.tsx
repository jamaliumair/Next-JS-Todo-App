"use client";

import { useState } from "react";

type TodoInputType = {
    addNewTodo: (newTodo: string) => void;
    errorMsg: string
}

export default function TodoInput({
    addNewTodo,
    errorMsg
}: TodoInputType) {

    const [newTodo, setNewTodo] = useState("");

    return (
        <>
        <h1>Todo App</h1>
        <div className="inputContainer">
            <input
                className="todo-input"
                type="text"
                id="new-todo"
                value={newTodo}
                onChange={(e) => { setNewTodo(e.target.value) }}
            />
            <button
            className="add-btn"
                onClick={()=>{
                    addNewTodo(newTodo);
                    setNewTodo("");
                }}
            >Add Todo</button>
            </div>
            <p>{errorMsg}</p>
        </>
    )
}