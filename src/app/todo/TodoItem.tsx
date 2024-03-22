
export default function TodoItem({todo, toggleTodo,delTodo}: any){
    return(
        <li className="flex justify-center space-x-7 items-center bg-gray-300 rounded-md p-1.5">
            <span className={"w-1/3 text-start " + (todo.completed ? 'line-through' : '')}>{todo.text}</span> 
            <button onClick={() => delTodo(todo.id)} className=" rounded-md bg-red-500 hover:bg-red-600 text-white py-2 px-4">删除</button>
            <button onClick={() => toggleTodo(todo.id)} className=" rounded-md bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">切换</button>
        </li>
    )
}