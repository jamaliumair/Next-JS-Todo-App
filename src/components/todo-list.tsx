"use client";

import React from "react";

type TodoListType = {
    todos: {todo: string; isComplete: boolean}[];
    deleteTodo: (todoIndex: number) => void;
    setEditIndex: (todoIndex: number) => void;
    completeTodo: (index: number) => void
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
                todos.map(({todo}, index) => (
                    <div key={todo + index}>
                        {
                            todos[index].isComplete ?
                            <p className="completed">{todo}</p>:
                            <p>{todo}</p>
                        }

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
                            completeTodo(index)
                        }}>Mark as Completed</button>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}