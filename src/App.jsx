import { useEffect, useState } from "react"
import { NewForm } from "./NewForm"
import "./styles.css"
import { TodoList } from "./list"
import { crypto } from 'crypto';

export default function App() {
  const [notes, setNOtes] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(notes))
  }, [notes]);

  function todos (title) {
    todos((todos)  => {
      return [
        ...todos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleNote (id, completed) {
    setTodos((todos) => {
      return todos.map(todos => {
        if (todos.id === id) {
          return { ...todos, completed }
        }
      })
    })
  }

  function deletenote (id)  {
    (currentnotes => {
      return currentnotes.filter(note => note.id !== id)
    })
  }

  return (
    <>
      <NewForm onSubmit={setNOtes} />
      <h1 className="header">My Notes</h1>
      <TodoList todos={todos} toggleTodo={toggleNote} deleteTodo={deletenote} />
    </>
  )
}
