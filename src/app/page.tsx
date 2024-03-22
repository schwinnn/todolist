'use client';

import AddTodo from "@/components/AddTodo";
import TodoFilter from "@/components/TodoFilter";
import TodoList from "@/components/TodoList";
import { Todo } from "@/types";
import { useState } from "react";

export default function Home() {
  const [Todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState('all')

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }
    console.log(newTodo)
    setTodos([...Todos, newTodo])
  }

  const deleteTodo = (id: number) => {
    setTodos(Todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id: number) => {
    setTodos(Todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const getFilteredTodos = () => {
    switch (filter) {
      case 'all':
        return Todos
      case 'active':
        return Todos.filter(todo => !todo.completed)
      case 'completed':
        return Todos.filter(todo => todo.completed)
    }
  }


  return (
    <div className="p-4 my-3 mx-auto w-2/4 h-96 flex flex-col justify-between items-center border bg-gray-400 rounded-xl">
      <h1 className="">TodoList</h1>
      <AddTodo addTodo={addTodo}></AddTodo>
      <TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>
      <TodoFilter setFilter={setFilter}></TodoFilter>
    </div>
  );
}