import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import alanBtn from "@alan-ai/alan-sdk-web";
import todoServices from "./services/todos";
import wordsToNumbers from 'words-to-numbers';

const init_todos = [
    {id: 1, content: 'Write code', done: true}
];

function App() {
    const [todos, setTodos] = useState(init_todos)

    useEffect(() => {
        const init = async () => {
            const todos = await todoServices.getAllTodos()
            setTodos(todos)
        }; init()
    },[])

    useEffect(() => {
        alanBtn({
            key: process.env.REACT_APP_ALAN_KEY,
            onCommand: async ({command, newTodo, todoId}) => {
                if(command === 'addTodo') {
                    await todoServices.addTodo(newTodo)
                    const todos = await todoServices.getAllTodos()
                    setTodos(todos)
                }

                else if(command === 'updateTodo') {
                    let todos = await todoServices.getAllTodos()
                    const intId = wordsToNumbers(todoId)
                    const todo = todos.find(todo => {
                        return todo.id === intId
                    })
                    await todoServices.updateTodo(intId, !todo.done)
                    todos = await todoServices.getAllTodos()
                    setTodos(todos)
                }

                else if(command === 'deleteTodo') {
                    const intId = wordsToNumbers(todoId)
                    await todoServices.deleteTodo(intId)
                    const todos = await todoServices.getAllTodos()
                    setTodos(todos)
                }

            }
        });
    }, [])


  return (
    <div>
        <Navbar />
        <div className="container">
            <Todos todos={todos} />
        </div>
    </div>
  );
}

export default App;
