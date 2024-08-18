"use client";

import React from "react";

type TodoListType = {
    todos: string[];
    deleteTodo: (todoIndex: number) => void;
    setEditIndex: (todoIndex: number) => void;
    completeTodo: (index: number, textClass: string, btnClass: string) => void
}

export default function TodoList({
    todos,
    deleteTodo,
    setEditIndex,
    completeTodo
}: TodoListType) {

    
    return (
        <div className="todo-list">
            {
                todos.map((todo, index) => (
                    <div key={todo + index}>
                        <p className={`todo${index}`}>{todo}</p>

                        <div className="todo-btns">
                        <button className="edit-btn" id={`mark-btn${index}`}
                            onClick={() => {
                                setEditIndex(index)
                            }}

                        >Edit</button>

                        <button className="delete-btn"
                        onClick={() => {
                            deleteTodo(index)
                        }}>Delete</button>
                        <button
                        onClick={() => {
                            completeTodo(index, `todo${index}`, `mark-btn${index}`)
                        }}>Mark as Completed</button>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}