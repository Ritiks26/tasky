import axios from "axios";
import { useNotification } from "../../context/NotificationContext";
import { useEffect, useRef, useState } from "react";
import { QuickView } from "../../components/QuickView";
import { TaskCard } from "../../components/TaskCard";
import { AnimatePresence, motion } from "motion/react";
import "./Tasks.css";

export function Tasks({
  todos,
  setTodos,
  loading,
  error,
  fetchTodo,
  onToggleStatus,
}) {
  const [pendingDelete, setPendingDelete] = useState(null);
  const timerRef = useRef(null);
  const { setHasNewTask } = useNotification();

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasNewTask(false);
    }, 1000);

    return () => clearTimeout(timer);
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
      await fetchTodo();
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

  if (loading)
    return <p style={{ color: "red", fontSize: "2rem" }}>Loading tasks...</p>;
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
            onToggleStatus={onToggleStatus}
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
