
function Header({ taskCount }) {
  return (
    <header className="app-header">
      <h1>Student Assistant</h1>
      <span className="task-count">
        Завдань: {taskCount}
      </span>
    </header>
  );
}

export default Header;
