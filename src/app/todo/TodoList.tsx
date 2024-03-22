import TodoItem from "./TodoItem"
import { Todo } from "@/types"

interface TodosProps {
    todos: Array<Todo>,
    toggleTodo: (id: number) => void,
    delTodo: (id: number) => void,
}

export default function TodoList({todos, toggleTodo, delTodo}: TodosProps){

    return (
        <div className="w-[400px] text-center space-y-4">
            {/* <h2>All of TodoList</h2> */}
            <ul className="mt-5 space-y-3">
                {todos.map( todo => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} delTodo={delTodo}></TodoItem>
                ))}
                
            </ul>
            {todos.length > 0 ? '' : "pleace add todos...."}
        </div>
    )
}