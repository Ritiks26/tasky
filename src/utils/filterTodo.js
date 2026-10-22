import { startOfDay } from "date-fns";

function isOverdue(todo, todayMs) {
  if (todo.complete || !todo.dueDate) return false;

  return startOfDay(new Date(todo.dueDate)).getTime() < todayMs;
}

export function filterTodos(todos, filter) {
  const todayMs = startOfDay(new Date()).getTime();

  switch (filter) {
    case "inProgress":
      return todos.filter((t) => !t.completed && !isOverdue(t, todayMs));
    case "highPriority":
      return todos.filter(
        (t) => !t.completed && t.priority?.toLowerCase() === "high",
      );
    case "overdue":
      return todos.filter((t) => isOverdue(t, todayMs));
    case "finished":
      return todos.filter((t) => t.completed);
    case "all":
    default:
      return todos;
  }
}
