import React, { useState } from "react";
import "./App.css";
import "./styles/tachyons.min.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Search from "./Search";

function App() {
  // there is where todos are passed up and stored
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");

  return (
    <div className="bg-white mw6 center mt4 mt5-ns pa3 pb5 br3 pointer ">
      <h1 className="f2">Todo list</h1>
      <Search updateFilter={filterString => setFilter(filterString)} />
      <TodoList todos={todos} filter={filter} />
      <AddTodo
        saveTodo={newTodo => {
          setTodos([...todos, newTodo]);
          console.log(todos);
        }}
      />
    </div>
  );
}

export default App;
