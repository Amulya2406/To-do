import React, { useState } from "react";
import "./App.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = event => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() === "") {
      return;
    }
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const deleteTodo = index => {
    const updatedTodos = todos.filter((_, i) => i !== index);

    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Add new todo"
        />
        <button onClick={addTodo} className="add-btn">
          Add
        </button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <input type="checkbox" />
            <span>{todo}</span>
            <button className="delete-btn" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
