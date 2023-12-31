import { useState } from "react";
import "./Todo.css";

// THINGS THAT ARE COMMENTED OUT ARE PART OF DRAG AND DROP FUNCTIONALITY, THAT IS NOT WORKING YET

export const Todo = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
  // handleDragAndDrop,
  // todos,
  // index,
}) => {
  const [editing, setEditing] = useState(false);
  // const dragItemRef = useRef(null); // currently dragged element
  // const dragOverItemRef = useRef(null); // element that is under currently dragged element

  const handleCheckboxClick = () =>
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });

  const handleEditing = () => {
    setEditing(!editing);
    console.log(editing);
  };

  const handleUpdateLabel = (e) =>
    handleUpdateTodo({
      ...todo,
      label: e.target.value,
    });

  const handleDeleteClick = () => handleDeleteTodo(todo.id);

  // const dragStart = (e, index) => {
  //   dragItemRef.current = index;
  //   console.log(`Dragged item is ${dragItemRef.current}`);
  // };

  // const dragEnter = (e, index) => {
  //   dragOverItemRef.current = index;
  //   console.log(dragOverItemRef.current);
  // };

  // const drop = () => {
  //   const todosCopy = JSON.parse(JSON.stringify(todos));
  //   const draggedItemContent = todosCopy[dragItemRef.current];
  //   console.log(draggedItemContent);
  //   todosCopy.splice(dragItemRef.current, 1);
  //   console.log(todosCopy);
  //   todosCopy.splice(dragOverItemRef.current, 0, draggedItemContent);
  //   console.log(`Drag Over itme in drop is ${dragOverItemRef.current}`);
  //   dragItemRef.current = null;
  //   dragOverItemRef.current = null;
  //   console.log(todosCopy);
  //   handleDragAndDrop(todosCopy);
  // };

  return (
    <>
      <li
        className="todo-element"
        id={todo.id}
        // onDragStart={(e) => dragStart(e, index)}
        // onDragEnter={(e) => dragEnter(e, index)}
        // onDragEnd={drop}
        // draggable
      >
        <div className="todo-element-input-wrapper">
          <div>
            <label htmlFor={`todo-checkbox-${todo.id}`}>
              <input
                type="checkbox"
                id={`todo-checkbox-${todo.id}`}
                name={`todo-checkbox-${todo.id}`}
                checked={todo.completed}
                onChange={handleCheckboxClick}
              />
              <span />
            </label>
          </div>
          {editing === true ? (
            <label htmlFor={`todo-input-${todo.id}`}>
              <input
                id={`todo-input-${todo.id}`}
                name={`todo-input-${todo.id}`}
                type="text"
                value={todo.label}
                onChange={handleUpdateLabel}
              />
            </label>
          ) : (
            <span className={todo.completed ? "todo completed" : "todo"}>
              {todo.label}
            </span>
          )}
        </div>
        <button className="edit-save-buton" onClick={handleEditing}>
          {editing ? "Save" : "Edit"}
        </button>
        {!editing ? (
          <button className="delete-button" onClick={handleDeleteClick}>
            <img src="./icon-cross.svg" alt="cross, delete icon" />
          </button>
        ) : null}
      </li>
    </>
  );
};
