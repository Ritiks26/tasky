import { Tasks } from "./Tasks";

export function Task({
  todos,
  setTodos,
  loading,
  error,
  fetchTodo,
  onToggleStatus,
}) {
  return (
    <Tasks
      todos={todos}
      setTodos={setTodos}
      loading={loading}
      error={error}
      fetchTodo={fetchTodo}
      onToggleStatus={onToggleStatus}
    />
  );
}
