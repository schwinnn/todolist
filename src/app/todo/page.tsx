'use client'
import { useState } from "react"
import TodoList from "./TodoList"
import { Todo } from "./../../types"
import AddTodo from "./AddTodo"
import FilterTodo from "./filterTodo"

export default function Todo() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [filter, setFilter] = useState('all')

    const addTodo = (text: string) => {
        const new_todo = {
            id: Date.now(),
            text: text,
            completed: false
        }
        setTodos([
            ...todos,
            new_todo
        ])
    }

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const delTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const filterTodo = () => {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.completed)
            case 'completed':
                return todos.filter(todo => todo.completed)
            default:
                return todos
        }
    }
    return (
        <div className="w-[500px] h-[600px] bg-gray-200 mx-auto p-3 my-3 rounded-xl flex flex-col space-y-3 items-center" >
            <h1 className=" bg-gray-600 w-[400px] h-11 pt-2 text-white text-center">TodoList</h1>
            <AddTodo addTodo={addTodo}></AddTodo>
            <TodoList todos={filterTodo()} toggleTodo={toggleTodo} delTodo={delTodo}></TodoList>
            <FilterTodo setFilter={setFilter}></FilterTodo>

        </div>
    )
}