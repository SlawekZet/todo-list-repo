import { useState } from "react";
import { Todo } from "../Todo/Todo";
import { TodoInput } from "../TodoInput/TodoInput";
import "./TodoList.css";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, label: "Testowy todo", completed: false },
    { id: 2, label: "Drugi testowy todo", completed: false },
    { id: 3, label: "Trzeci testowy todo", completed: false },
    { id: 4, label: "Czwarty testowy todo", completed: false },
    { id: 5, label: "Piąty testowy todo", completed: false },
    { id: 6, label: "Szósty testowy todo", completed: false },
  ]);

  const [filter, setFilter] = useState("all");

  //Udpating todo = editing and marking as complete

  const handleUpdateTodo = (updatedTodo) => {
    const newTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(newTodos);
  };

  // Deleting todo

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  // Adding todos

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    console.log(todos);
  };

  // Clearing completed todos

  const handleClearTodosClick = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // sets the style of All/Active/Completed button when choosen

  const activeFiletrStyle = (activeFilter) => {
    if (filter === activeFilter) {
      return "secondary button bold active-filter";
    }
    return "secondary button bold";
  };

  const handleDragAndDrop = (updatedTodoList) => {
    setTodos(updatedTodoList);
  };

  return (
    <>
      <ul>
        <TodoInput handleAddTodo={handleAddTodo} todos={todos} />
        {todos.length === 0 ? (
          <div className="message">
            <p>The list is empty</p>
          </div>
        ) : filter === "all" ? (
          todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              handleUpdateTodo={handleUpdateTodo}
              handleDeleteTodo={handleDeleteTodo}
              handleDragAndDrop={handleDragAndDrop}
              todos={todos}
              index={index}
            />
          ))
        ) : filter === "active" ? (
          todos
            .filter((todo) => !todo.completed)
            .map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                handleUpdateTodo={handleUpdateTodo}
                handleDeleteTodo={handleDeleteTodo}
                handleDragAndDrop={handleDragAndDrop}
                todos={todos}
                index={index}
              />
            ))
        ) : filter === "completed" ? (
          todos
            .filter((todo) => todo.completed)
            .map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                handleUpdateTodo={handleUpdateTodo}
                handleDeleteTodo={handleDeleteTodo}
                handleDragAndDrop={handleDragAndDrop}
                todos={todos}
                index={index}
              />
            ))
        ) : null}
        {!todos.length ? null : (
          <div className="todo-list-lower-bar">
            <div>
              <p className="secondary">{todos.length} items left</p>
            </div>
            <div className="todo-list-lower-bar-buttons">
              <button
                className={activeFiletrStyle("all")}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={activeFiletrStyle("active")}
                onClick={() => setFilter("active")}
              >
                Active
              </button>
              <button
                className={activeFiletrStyle("completed")}
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </div>
            <div>
              <button
                className="secondary button"
                onClick={handleClearTodosClick}
              >
                Clear Completed
              </button>
            </div>
          </div>
        )}
      </ul>
    </>
  );
};
