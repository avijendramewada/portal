import React from "react";
import "../styles/Todo.css";
function TodoList(props) {
  return (
    <div className="todo">
      <form>
        <input placeholder="Please enter a massage" />
      </form>
    </div>
  );
}

export default TodoList;
