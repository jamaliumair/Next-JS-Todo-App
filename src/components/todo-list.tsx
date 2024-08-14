

type TodoListType = {
    todos: string[];
    deleteTodo: (todoIndex: number) => void;
    setEditIndex: (todoIndex: number) => void;
}

export default function TodoList({
    todos,
    deleteTodo,
    setEditIndex
}: TodoListType) {
    return (
        <div className="todo-list">
            {
                todos.map((todo, index) => (
                    <div key={todo + index}>
                        <p>{todo}

                        <div>
                        <button
                            onClick={() => {
                                setEditIndex(index)
                            }}

                        >Edit</button>

                        <button onClick={() => {
                            deleteTodo(index)
                        }}>Delete</button>
                        </div>
                        </p>
                    </div>
                ))
            }
        </div>
    )
}