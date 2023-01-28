const SERVER_BASE_URL = 'http://localhost:3001'

const getAllTodos = async () => {
    const notes = await fetch(`${SERVER_BASE_URL}/todos`)
    return await notes.json()
}

const addTodo = async(todo) => {
    try{
        await fetch(`${SERVER_BASE_URL}/todos`, {
            method: "POST",
            body: JSON.stringify({content: todo, done: false}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch(error) {
        console.log(error)
    }
}

const updateTodo = async (id, done) => {
    try{
        await fetch(`${SERVER_BASE_URL}/todos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({done: done}),
            headers: {
                "Content-Type": "application/json"
            }
        })

    } catch(error) {
        console.log(error)
    }
}

const deleteTodo = async (id) => {
    try{
        await fetch(`${SERVER_BASE_URL}/todos/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        })

    } catch(error) {
        console.log(error)
    }
}

module.exports = {
    getAllTodos,
    addTodo,
    updateTodo,
    deleteTodo
}
