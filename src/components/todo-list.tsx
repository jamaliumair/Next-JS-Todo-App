"use client";

import React, { useState } from "react";

type TodoListType = {
    todos: {todo: string; isComplete: boolean}[];
    deleteTodo: (todoIndex: number) => void;
    setEditIndex: (todoIndex: number) => void;
    completeTodo: (index: number) => void;
    editIndex: number;
    setCheckState: (checkState: boolean) => void;
    checkState: boolean
}

export default function TodoList({
    todos,
    deleteTodo,
    setEditIndex,
    completeTodo,
    editIndex,
    setCheckState,
    checkState
}: TodoListType) {

    
    return (
        <div className="todo-list">
            
                { checkState && 
                    <p>Please Save Your Current Todo</p>
                }
             {   todos.map(({todo}, index) => (
                    <div key={todo + index}>
                        {
                            todos[index].isComplete ?
                            <p className="completed">{todo}</p>:
                            <p>{todo}</p>
                        }

                        <div className="todo-btns">
                        <button className="edit-btn" id={`mark-btn${index}`}
                        
                            onClick={() => {
                                if (editIndex === -1) {
                                    setEditIndex(index)
                                    setCheckState(false)
                                } else {
                                    setCheckState(true)
                                }
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