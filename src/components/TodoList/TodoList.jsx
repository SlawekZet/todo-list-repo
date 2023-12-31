import { useCallback, useEffect, useState } from "react";
import { Todo } from "../Todo/Todo";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoListLowerBar } from "../TodoListLowerBar/TodoListLowerBar";
import "./TodoList.css";

// !!! some lines were commeted off while waiting for drag and drop fix

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, label: "Complete online JavaScript course", completed: true },
    { id: 2, label: "Jog around the park 3x", completed: false },
    { id: 3, label: "10 minutes meditation", completed: false },
    { id: 4, label: "Read for 1 hour", completed: false },
    { id: 5, label: "Pick up groceries", completed: false },
    { id: 6, label: "Complete Todo App on Frontend Mentor", completed: false },
  ]);
  const [filter, setFilter] = useState("all");

  // loading todos from localStorage

  useEffect(() => {
    let savedTodos = localStorage.getItem("localTodos");
    if (savedTodos && savedTodos.length > 0) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // saving todos to localStorage

  useEffect(() => {
    const localTodos = JSON.stringify(todos);

    localStorage.setItem("localTodos", localTodos);
  }, [todos]);

  //Udpating todo = editing and marking as complete

  const handleUpdateTodo = useCallback(
    (updatedTodo) => {
      const newTodos = todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
      setTodos(newTodos);
    },
    [todos]
  );

  // Deleting todo

  const handleDeleteTodo = useCallback(
    (id) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    },
    [todos]
  );

  // Adding todos

  const handleAddTodo = useCallback(
    (newTodo) => {
      const newTodos = [...todos, newTodo];
      setTodos(newTodos);
    },
    [todos]
  );

  // const handleDragAndDrop = (updatedTodoList) => {
  //   setTodos(updatedTodoList);
  // };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleTodosChange = (updatedTodos) => {
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} todos={todos} />
      <div className="todo-list-wrapper">
        {todos.length === 0 ? (
          <div className="message">
            <p>The list is empty</p>
          </div>
        ) : filter === "all" ? (
          <ul>
            {todos.map((todo, index) => (
              <Todo
                key={index}
                todo={todo}
                handleUpdateTodo={handleUpdateTodo}
                handleDeleteTodo={handleDeleteTodo}
                // handleDragAndDrop={handleDragAndDrop}
                // todos={todos}
                // index={index}
              />
            ))}
          </ul>
        ) : filter === "active" ? (
          <ul>
            {todos
              .filter((todo) => !todo.completed)
              .map((todo, index) => (
                <Todo
                  key={index}
                  todo={todo}
                  handleUpdateTodo={handleUpdateTodo}
                  handleDeleteTodo={handleDeleteTodo}
                  // handleDragAndDrop={handleDragAndDrop}
                  // todos={todos}
                  // index={index}
                />
              ))}
          </ul>
        ) : filter === "completed" ? (
          <ul>
            {todos
              .filter((todo) => todo.completed)
              .map((todo, index) => (
                <Todo
                  key={index}
                  todo={todo}
                  handleUpdateTodo={handleUpdateTodo}
                  handleDeleteTodo={handleDeleteTodo}
                  // handleDragAndDrop={handleDragAndDrop}
                  // todos={todos}
                  // index={index}
                />
              ))}
          </ul>
        ) : null}
        <TodoListLowerBar
          todos={todos}
          filter={filter}
          handleTodosChange={handleTodosChange}
          handleFilterChange={handleFilterChange}
        />
      </div>
    </>
  );
};
