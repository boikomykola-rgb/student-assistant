
import styled from "styled-components";

const StyledCard = styled.li`
  display: flex;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 8px;
  list-style: none;
  background: #ffffff;
  color: #222222;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);

  border-left: 4px solid
    ${({ $priority }) =>
      $priority === "high"
        ? "#e63946"
        : $priority === "medium"
        ? "#f4a261"
        : "#2a9d8f"};

  span:first-child {
    flex: 1;
    min-width: 0;
    overflow-wrap: anywhere;
    text-decoration: ${({ $completed }) =>
      $completed ? "line-through" : "none"};
    opacity: ${({ $completed }) => ($completed ? 0.6 : 1)};
  }

  span:last-child {
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 12px;
  }
`;

function TaskItem({ task }) {
  return (
    <StyledCard
      className="task-card"
      $priority={task.priority}
      $completed={task.completed}
    >
      <span>{task.title}</span>
      <span>{task.priority}</span>
    </StyledCard>
  );
}

export default TaskItem;
