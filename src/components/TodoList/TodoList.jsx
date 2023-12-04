import { useCallback, useEffect, useState } from "react";
import { Todo } from "../Todo/Todo";
import { TodoInput } from "../TodoInput/TodoInput";
import { TodoListLowerBar } from "../TodoListLowerBar/TodoListLowerBar";
import "./TodoList.css";

// !!! some lines were commeted off while waiting for drag and drop fix

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

  // loading todos from localStorage

  useEffect(() => {
    let savedTodos = localStorage.getItem("localTodos");
    console.log("Saved Todos from Local Storage:", savedTodos);
    if (savedTodos && savedTodos.length > 0) {
      console.log("Parsing Todos...");
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // saving todos to localStorage

  useEffect(() => {
    const localTodos = JSON.stringify(todos);
    console.log("Todos to save to the LocalStorage:", localTodos);
    localStorage.setItem("localTodos", localTodos);
  }, [todos]);

  console.log(todos);

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
      <ul>
        <TodoInput handleAddTodo={handleAddTodo} todos={todos} />
        <div className="todo-list-wrapper">
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
                // handleDragAndDrop={handleDragAndDrop}
                // todos={todos}
                // index={index}
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
                  // handleDragAndDrop={handleDragAndDrop}
                  // todos={todos}
                  // index={index}
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
                  // handleDragAndDrop={handleDragAndDrop}
                  // todos={todos}
                  // index={index}
                />
              ))
          ) : null}
          <TodoListLowerBar
            todos={todos}
            filter={filter}
            handleTodosChange={handleTodosChange}
            handleFilterChange={handleFilterChange}
          />
        </div>
      </ul>
    </>
  );
};
