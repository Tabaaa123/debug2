import { TodoItem } from "./item"

export function TodoList({ todos, toggleNote, deletenote}) {
  return (
    <ul className="list">
      {todos.length === 0 && "No notes"}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleNote={toggleNote}
            deleteTodo={deletenote}
          />
        )
      })}
    </ul>
  )
}