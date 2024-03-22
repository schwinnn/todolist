'use client'
import { useState } from "react"

export default function AddTodo({addTodo}: any){

    const [text, setText] = useState('')

    const hundleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(text.trim() === ''){
            return ''
        }

        addTodo(text)
        setText('')
    }

    return (
        <form action='' className=" w-[400px] flex justify-around" onSubmit={hundleSubmit}>
            <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a todo"
            className="w-2/3 p-2 border border-orange-500 rounded-md focus:border-orange-700 text-black"
            />
            <button className=" rounded-md bg-red-500 hover:bg-red-600 text-white py-2 px-4">添加</button>
        </form>
    )
}