import { useEffect, useState, useRef } from "react"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"
import Button from "./Button"

const Todo = () => {

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks')

        if (savedTasks) {
            return JSON.parse(savedTasks)
        }

        return [
            { id: 'task-1', title: 'Купить молоко', isDone: false },
            {id: 'task-2', title: 'Купить немолоко', isDone: true}
        ]
    })
    const [newTaskTitle, setNewTaskTitle] = useState('')    
    const [searchQuery, setSearchQuery] = useState('')

    const newTaskInputRef = useRef(null)

    const deleteAllTasks = () => {
        const isConfirmed = confirm('Are you sure you want to delete all?')

        if (isConfirmed) {
            setTasks([])
        }
    }

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id != taskId))
    }

    const toggleTaskComplete = (taskId, isDone) => {
        setTasks(
            tasks.map((task) => {
                if (task.id == taskId) {
                    return {...task, isDone}
                }
                return task
            })
        )
    }

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false
            }
            setTasks((prevTasks) => [...prevTasks, newTask])
            setNewTaskTitle('')
            setSearchQuery('')
            newTaskInputRef.current.focus()
        }
        
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    useEffect(() => {
        newTaskInputRef.current.focus()
    }, [])

    
    const filteredTasks =
      searchQuery.length > 0
        ? tasks.filter(({ title }) =>
            title.toLowerCase().includes(searchQuery)
          )
        : tasks;

    const doneTasks = tasks.filter(({ isDone }) => isDone).length
    



    return (
    <div className="todo">
        <h1 className="todo__title">Список заметок</h1>
            <AddTaskForm
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
                newTaskInputRef={newTaskInputRef}
            />
            <SearchTaskForm
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <TodoInfo
                total={tasks.length}
                done={doneTasks}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
                filteredTasks={filteredTasks}
            />
    </div>
    )
}

export default Todo