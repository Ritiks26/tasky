import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { QuickView } from "../../components/QuickView";
import { TaskCard } from "../../components/TaskCard";
import { AnimatePresence, motion } from "motion/react";
import "./Tasks.css";

export function Tasks() {
  const [todos, setTodos] = useState([]);
  const [pendingDelete, setPendingDelete] = useState(null);
  const timerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTodo = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/todos`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(res.data.todos);
    } catch (err) {
      const message = err.response?.data?.message || "something wwnt wrong";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const finalizeDelete = async (todo) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/todos/${todo.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
    } catch (err) {
      console.log(err.response?.data?.message || "something went wrong");
    }
  };

  const handleSwipeDelete = async (todo) => {
    if (pendingDelete) {
      clearTimeout(timerRef.current);
      finalizeDelete(pendingDelete.todo);
    }

    setTodos((prev) => prev.filter((t) => t.id !== todo.id));

    const timerId = setTimeout(() => {
      finalizeDelete(todo);
      setPendingDelete(null);
    }, 4000);

    timerRef.current = timerId;
    setPendingDelete({ todo });
  };

  const handleUndo = () => {
    if (!pendingDelete) return;

    clearTimeout(timerRef.current);

    setTodos((prev) =>
      [...prev, pendingDelete.todo].sort((a, b) => a.id - b.id),
    );

    setPendingDelete(null);
  };

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="tasks-container">
      <QuickView />
      {todos.length === 0 && (
        <p style={{ marginInline: "auto", marginTop: "0.5rem" }}>
          No tasks yet. Create one!
        </p>
      )}

      <AnimatePresence>
        {todos.map((todo) => (
          <TaskCard
            key={todo.id}
            todo={todo}
            onSwipeDelete={handleSwipeDelete}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {pendingDelete && (
          <motion.div
            className="undo-toast"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p>Task deleted</p>
            <p onClick={handleUndo}>Undo</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
