import Field from "./Field"

const SearchTaskForm = ({ searchQuery, setSearchQuery }) => {
    return (
        <form className="todo__form" onSubmit={(event) => event.preventDefault()}>
        <Field
          className="todo__field"
          label="Поиск заметки"
          id="search-task"
          type="search"
          value={searchQuery}
          onInput={(event) => setSearchQuery(event.target.value)}
        />
      </form>
    )
}

export default SearchTaskForm