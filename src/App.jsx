import "./App.css";
import { BackgroundImage } from "./components/BackgroundImage/BackgroundImage";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import { TodoList } from "./components/TodoList/TodoList";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <main>
        <ThemeProvider>
          <BackgroundImage />
          <section className="todo-card-wrapper">
            <ThemeSwitcher />
            <TodoList />
          </section>
        </ThemeProvider>
      </main>
    </>
  );
}

export default App;
