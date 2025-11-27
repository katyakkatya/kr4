import Field from "./Field"
import Button from "./Button"

const AddTaskForm = ({ addTask,
  newTaskTitle, setNewTaskTitle,
  newTaskInputRef}) => {
  
  const onSubmit = (event) => {
    event.preventDefault()
    addTask()
  }

    return (
        <form className="todo__form" onSubmit={onSubmit}>
        <Field
          className="todo__field"
          label="Заголовок заметки"
          id="new-task"
          value={newTaskTitle}
          onInput={(event) => setNewTaskTitle(event.target.value)}
          ref={newTaskInputRef}
        />
        <Button type="submit">Добавить</Button>
      </form>
    )
}

export default AddTaskForm