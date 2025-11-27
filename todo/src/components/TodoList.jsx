import TodoItem from "./TodoItem"

const TodoList = ({tasks = [], onDeleteTaskButtonClick, onTaskCompleteChange, filteredTasks}) => {
    
    const hasTask = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0

    if (!hasTask) {
        return (
            <div className="todo__empty-message">Пока нет заметок</div>
        )
    }

    if (hasTask && isEmptyFilteredTasks) {
        return (
            <div className="todo__empty-message">Заметки не найдены</div>
        )
    }
    
    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map((task) => (
                <TodoItem
                    className="todo__item"
                    key={task.id}
                    onDeleteTaskButtonClick={onDeleteTaskButtonClick}
                    onTaskCompleteChange={onTaskCompleteChange}
                    {...task}
                />
            ))}
        </ul>
    )
    
}

export default TodoList