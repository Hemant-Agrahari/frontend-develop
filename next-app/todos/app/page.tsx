"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);

  const add = () => {
    if (input.trim() === "") return;

    if (editId !== null) {
      // Update item
      setItems((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, text: input } : item
        )
      );
      setEditId(null);
    } else {
      // Add new item
      setItems((prev) => [
        ...prev,
        { id: Date.now(), text: input },
      ]);
    }

    setInput("");
  };

  const deleteTodo = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const editTodo = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    setInput(selectedItem.text);
    setEditId(id);
  };

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={add}>
        {editId !== null ? "Update" : "Add"}
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <div>
              <button onClick={() => deleteTodo(item.id)}>
                Delete
              </button>
              <button onClick={() => editTodo(item.id)}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}