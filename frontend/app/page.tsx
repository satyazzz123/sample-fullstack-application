'use client'

import { getTodos, addTodo } from "@/api/todo";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((data) => {
      setTodos(data);
    })
  }, [])

  return (
    <div className="bg-white h-screen p-6 text-gray-800">
      <h1 className="mb-4 text-xl">Todo List</h1>
      <div className="mb-4">
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        className="border bg-white p-2 mr-2" 
        placeholder="Add new todo" 
      />
      <button onClick={() => addTodo(newTodo)} className="bg-white text-black border p-2">Add</button>
    </div>
      <ul className="list-none p-0">
        {todos?.length != 0 && todos.map((todo: any) => (
          <li key={todo.id} className="mb-2 text-blue-500 text-lg">
            <span>{todo.body}</span>
          </li>
        ))}
        {todos.length === 0 && <p>No todos found</p>}
      </ul>
    </div>
  );
}
