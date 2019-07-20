import React from "react";
import ListItem from "./ListItem";

// pull in list of todos
const TodoList = ({ todos, filter }) => (
  <ul className="pl0">
    {/* for each todo create an item also pulls through the index number */}
    {todos
      .filter(todoItem => todoItem.toLowerCase().includes(filter.toLowerCase()))
      .map((todo, index) => (
        // apply the index number to the key
        <ListItem key={index} todo={todo} />
        //   <li key={index}>{todo}</li>
      ))}
  </ul>
);

export default TodoList;
