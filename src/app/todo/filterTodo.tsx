interface FilterProps {
    setFilter: (filter: string) => void,
}

export default function FilterTodo({setFilter}: FilterProps) {

    return (
        <div className="flex space-x-6 pt-3">
            <button onClick={() => setFilter('all')} className=" rounded-md bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">ALL</button>
            <button onClick={() => setFilter('active')} className=" rounded-md bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">active</button>
            <button onClick={() => setFilter('completed')} className=" rounded-md bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">completed</button>
            
        </div>
    )
}