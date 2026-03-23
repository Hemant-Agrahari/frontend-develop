"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const add = () => {
    if (input === "") return null;
    setItems((prev) => [...prev, input]);
    setInput("");
  };
  return (
    <div className="d-flex align-items-center justify-content-center">
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
      <button onClick={add}>Add</button>
      <ul>
        {items.map((items, index) => {
          return <li key={index}>{items}</li>;
        })}
      </ul>
    </div>
  );
}
