const Todo = ({todo}) => {
    return (
        <li className="d-flex justify-content-between align-items-center list-group-item shadow-sm p-2 mb-3 bg-body rounded">
            <div className='d-flex'>
                <h6 className='m-0 pe-2'>{todo.id}</h6>
                <h3 className='py-0 my-0'>{todo.content}</h3>
            </div>
            {todo.done &&
                <span className="badge text-bg-success">done</span>
            }
        </li>
    )
}

export default Todo
