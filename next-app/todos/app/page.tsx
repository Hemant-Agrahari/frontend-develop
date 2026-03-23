"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editId,setEditId]=useState()
  const add = () => {
    if (input === "") return null;
    if(editId !== null){
      //update item
      setItems((prev)=>prev.map((item)=>item.id === editId ? {...item,text:input} : item))
      setEditId(null)
    }else{
      setItems((prev) => [...prev, {id:Date.now(),text:input}]);
    }
   
    setInput("");
  };

  const deleteTodo = ()=>{

  }
  const editTodo = ()=>{

  }
  return (
    <div className="d-flex align-items-center justify-content-center">
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
      <button onClick={add}>{editId !== null ? "Update" : "Add"}Add</button>
      <ul>
        {items.map((items, index) => {
          return <li key={index}>{items} <div><button onClick={deleteTodo}>delete</button> <button onClick={editTodo}>Edit</button></div></li>;
        })}
      </ul>
    </div>
  );
}
