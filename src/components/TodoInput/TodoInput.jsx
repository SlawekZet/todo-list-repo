/* eslint-disable react/prop-types */
import { useState } from "react";
import "./TodoInput.css";

export const TodoInput = ({ handleAddTodo, todos }) => {
  const [label, setLabel] = useState("");
  const [inputError, setInputError] = useState(false);

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
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=<>?/{}[]|:;,";
    if (!label.split("").some((e) => chars.includes(e))) {
      setLabel("");
      return setInputError(true);
    }
    const todo = createTodo(label);
    handleAddTodo(todo);
    setLabel("");
    setInputError(false);
  };

  return (
    <>
      <section className="todo-input-wrapper">
        <form className="input-wrapper">
          <div className="circle-icon"></div>
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
        {inputError ? (
          <div className="error-section">
            Invalid input. Please enter at least one character or word!
          </div>
        ) : null}
      </section>
    </>
  );
};
