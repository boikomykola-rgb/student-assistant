import "./App.css";
import tasks from "./tasks.json";
import TaskList from "./components/TaskList";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header taskCount={tasks.length} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
