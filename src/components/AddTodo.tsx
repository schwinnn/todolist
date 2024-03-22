'use client';
import { useState } from "react";

interface AddTodoProps {
    addTodo: (text: string) => void
}

function AddTodo({ addTodo }: AddTodoProps) {
    const [text, setText] = useState('')

    const hundleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim() === '') {
            return
        }
        addTodo(text)
        console.log(text)
        setText('')
    }

    return (
        <div>
            <form action="" onSubmit={hundleSubmit}>
                <input type="text"
                    value={text}
                    className="p-3 border border-gray-400 rounded-md hover:border-gray-800 focus:border-gray-900"
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add Todo" />
                <button type="submit">AddTodo</button>
            </form>
        </div>
    )
}

export default AddTodo;