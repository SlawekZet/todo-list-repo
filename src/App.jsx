import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <main>
        {theme === "light" ? (
          <img
            src="./bg-desktop-light.jpg"
            alt="an image of mountains"
            className="desktop-light-background"
          />
        ) : (
          <img
            src="./bg-desktop-dark.jpg"
            alt="an image of a hallway"
            className="desktop-dark-background"
          />
        )}
        <section className="todo-card-wrapper">
          <div className="header">
            <h1>TODO</h1>
            <button className="theme-switcher">
              <img src="./icon-moon.svg" alt="" />
            </button>
          </div>
          <div className="todo-wrapper">
            <TodoList />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
