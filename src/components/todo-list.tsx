

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
                        <p>{todo}</p>

                        <div className="todo-btns">
                        <button className="edit-btn"
                            onClick={() => {
                                setEditIndex(index)
                            }}

                        >Edit</button>

                        <button className="delete-btn"
                        onClick={() => {
                            deleteTodo(index)
                        }}>Delete</button>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}