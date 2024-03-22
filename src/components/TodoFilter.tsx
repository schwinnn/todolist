

function TodoFilter ({setFilter}: any) {

    return (
        <div>
            <button className="py-2 px-3 border rounded-md m-2 bg-blue-600 text-white" onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('active')}>Active</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
        </div>
    )
}

export default TodoFilter;
