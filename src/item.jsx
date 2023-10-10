export function TodoItem({ completed, id, title, toggleNote,deleteTodo }) {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={e =>toggleNote(id, e.target.checked)}
          />
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} className="">
          Delete
        </button>
      </li>
    );
  }