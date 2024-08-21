"use client";

import TodoEdit from "@/components/todo-edit";
import TodoInput from "@/components/todo-input";
import TodoList from "@/components/todo-list";
import { useEffect, useState } from "react";

export default function Home() {
    const [todos, setTodos] = useState<{todo: string, isComplete: boolean}[]>
    ([]);

    const [editIndex, setEditIndex] = useState(-1);

    const [errorMsg, setErrorMsg] = useState("")
    // let completedTodos: boolean[] = [];

    const addNewTodo = (newTodo: string) => {
        if (newTodo === "") {
            setErrorMsg("Please enter your todo");
        } else {
            // completedTodos.push(false);

            setTodos([...todos,{todo: newTodo, isComplete: false}]);
            console.log(todos);
            setErrorMsg("")
        }
    }

    const completeTodo = (index: number) => {
        
        let clone = [...todos];
        clone[index].isComplete = !clone[index].isComplete;
        setTodos([...clone]);
     }

    const deleteTodo = (todoIndex: number) => {
        let todosClone = [...todos];
        todosClone.splice(todoIndex, 1);
        setTodos([...todosClone]);
    }

    const saveEditedTodo = (updatedTodo: string) => {
        console.log(updatedTodo);
        let todosClone = [...todos];
        todosClone.splice(editIndex, 1, {todo: updatedTodo, isComplete: false});
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