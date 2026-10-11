import { Tasks } from "./Tasks";

export function Task({ todos, setTodos, loading, error, fetchTodo }) {
  return (
    <Tasks
      todos={todos}
      setTodos={setTodos}
      loading={loading}
      error={error}
      fetchTodo={fetchTodo}
    />
  );
}
