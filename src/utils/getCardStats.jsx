import { endOfDay } from "date-fns";

export function getCardStats(todos) {
  const now = new Date();

  let inProgress = 0;
  let Overdue = 0;
  let Finished = 0;
  let highPriority = 0;

  todos.forEach((todo) => {
    if (todo.completed) {
      Finished++;
      return;
    }

    const isOverDue = todo.dueDate && endOfDay(new Date(todo.dueDate)) < now;

    if (isOverDue) Overdue++;
    else inProgress++;

    if (todo.priority?.toLowerCase() === "high") highPriority++;
  });

  return { inProgress, Overdue, Finished, highPriority };
}
