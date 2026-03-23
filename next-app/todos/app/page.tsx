"use client"
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  console.log('item',item)

  const AddItem = () => {
    console.log("button click")
    if (input.trim() === "") return;

    setItem((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={AddItem}>Add</button>

      <ul>
        {item.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}