import Todo from './Todo'

const Todos = ({todos}) => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <h2 className='mb-3'>Voice based Todo App</h2>
            <div className="card shadow p-3 mb-5 bg-body rounded" style={{width: '32rem'}}>
            <ul className="list-group list-group-flush">
                {
                    todos &&
                    todos.map(todo => {
                        return <Todo  key={todo.id} todo={todo} />
                    })
                }
            </ul>
            </div>
        </div>
    )
}

export default Todos
