function TaskList({ tasks, onToggleTask, onDeleteTask }) {
    if (tasks.length === 0) {
      return <p data-testid="no-tasks">No Tasks Yet</p>;
    }
  
    return (
      <ul data-testid="task-list">
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
              data-testid={`task-${task.id}`}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;