import { useCallback } from "react";

export const TodoListLowerBar = ({
  todos,
  filter,
  handleTodosChange,
  handleFilterChange,
}) => {
  // sets the style of All/Active/Completed button when choosen

  const activeFiletrStyle = useCallback(
    (activeFilter) => {
      if (filter === activeFilter) {
        return "secondary button bold active-filter";
      }
      return "secondary button bold";
    },
    [filter]
  );

  // Clearing completed todos

  const handleClearTodosClick = useCallback(() => {
    const newTodos = todos.filter((todo) => !todo.completed);
    handleTodosChange(newTodos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  return (
    <>
      {!todos.length ? null : (
        <div className="todo-list-lower-bar desktop">
          <div>
            <p className="secondary">{todos.length} items left</p>
          </div>
          <div className="todo-list-lower-bar-buttons">
            <button
              className={activeFiletrStyle("all")}
              onClick={() => handleFilterChange("all")}
            >
              All
            </button>
            <button
              className={activeFiletrStyle("active")}
              onClick={() => handleFilterChange("active")}
            >
              Active
            </button>
            <button
              className={activeFiletrStyle("completed")}
              onClick={() => handleFilterChange("completed")}
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

      {!todos.length ? null : (
        <>
          <div className="todo-list-lower-bar mobile">
            <div>
              <p className="secondary">{todos.length} items left</p>
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
          <div className="mobile">
            <div className="todo-list-lower-bar-buttons lower-bar-container">
              <button
                className={activeFiletrStyle("all")}
                onClick={() => handleFilterChange("all")}
              >
                All
              </button>
              <button
                className={activeFiletrStyle("active")}
                onClick={() => handleFilterChange("active")}
              >
                Active
              </button>
              <button
                className={activeFiletrStyle("completed")}
                onClick={() => handleFilterChange("completed")}
              >
                Completed
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
