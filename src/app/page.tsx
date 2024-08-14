"use client";

import TodoEdit from "@/components/todo-edit";
import TodoInput from "@/components/todo-input";
import TodoList from "@/components/todo-list";
import { useEffect, useState } from "react";

export default function Home() {
    const [todos, setTodos] = useState<string[]>([]);

    const [editIndex, setEditIndex] = useState(-1);

    const [errorMsg, setErrorMsg] = useState("")

    const addNewTodo = (newTodo: string) => {
        if (newTodo === "") {
            setErrorMsg("Please enter your todo");
        }else {

            console.log("New Todo:", newTodo);
            setTodos([...todos, newTodo]);
            setErrorMsg("")
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
                deleteTodo={deleteTodo}
                setEditIndex={setEditIndex}
            />
        </div>
    )
}