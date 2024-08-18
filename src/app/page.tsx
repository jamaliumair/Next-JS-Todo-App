"use client";

import TodoEdit from "@/components/todo-edit";
import TodoInput from "@/components/todo-input";
import TodoList from "@/components/todo-list";
import { useEffect, useState } from "react";

export default function Home() {
    const [todos, setTodos] = useState<string[]>([]);

    const [editIndex, setEditIndex] = useState(-1);

    const [errorMsg, setErrorMsg] = useState("")
    let completedTodos: boolean[] = [];

    const addNewTodo = (newTodo: string) => {
        if (newTodo === "") {
            setErrorMsg("Please enter your todo");
        } else {
            completedTodos.push(false);

            console.log("New Todo:", newTodo);
            setTodos([...todos, newTodo]);
            setErrorMsg("")
        }
    }

    const completeTodo = (index: number, textClass: string, btnClass: string) => {
        completedTodos[index] = !completedTodos[index]
        let todoText = document.querySelector(`.${textClass}`) as HTMLElement | null;
        let editBtn = document.querySelector(`#${btnClass}`) as HTMLElement | null;
        
        if (todoText && editBtn) {
            if (completedTodos[index]) {
                todoText.classList.add('completed');
                editBtn.style.display = "none";
            } else {
                todoText.classList.remove('completed');
                editBtn.style.display = "inline-block";
            }
        } 

    }

    const deleteTodo = (todoIndex: number) => {
        let todosClone = [...todos];
        todosClone.splice(todoIndex, 1);
        setTodos([...todosClone]);
    }

    const saveEditedTodo = (updatedTodo: string) => {
        console.log(updatedTodo);
        let todosClone = [...todos];
        todosClone.splice(editIndex, 1, updatedTodo);
        setTodos([...todosClone]);
        setEditIndex(-1);
    }


    useEffect(() => {
        console.log("Todos List: ", todos);
    }, [todos])

    return (
        <div className="container">

            {
                editIndex === -1 ?
                    <TodoInput
                        addNewTodo={addNewTodo}
                        errorMsg={errorMsg}
                    /> :
                    <TodoEdit
                        editedTodo={todos[editIndex]}
                        saveEditedTodo={saveEditedTodo}
                    />

            }

            <TodoList
                todos={todos}
                completeTodo={completeTodo}
                
                deleteTodo={deleteTodo}
                setEditIndex={setEditIndex}
            />
        </div>
    )
}