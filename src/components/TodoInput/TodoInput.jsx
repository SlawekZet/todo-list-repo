/* eslint-disable react/prop-types */
import { useState } from "react";
import "./TodoInput.css";

export const TodoInput = ({ handleAddTodo, todos }) => {
  const [label, setLabel] = useState("");

  const handleUpdateLabel = (e) => setLabel(e.target.value);

  const createTodo = (label) => {
    return {
      id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
      label: label,
      completed: false,
    };
  };

  const handleAddTodoClick = (e) => {
    e.preventDefault();
    const todo = createTodo(label);
    handleAddTodo(todo);
    setLabel("");
  };

  return (
    <>
      <section className="todo-input-wrapper">
        <form className="input-wrapper">
          <img src="./icon-circle.svg" alt="circle icon" />
          <input
            type="text"
            className="todo-input"
            placeholder="Create a new todo..."
            value={label}
            onChange={handleUpdateLabel}
            onSubmit={handleAddTodoClick}
          />
          {label.length === 0 ? null : (
            <button onClick={handleAddTodoClick} className="add-todo-button">
              Add
            </button>
          )}
        </form>
      </section>
    </>
  );
};
