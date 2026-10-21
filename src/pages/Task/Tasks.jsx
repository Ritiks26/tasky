import axios from "axios";
import { useNotification } from "../../context/NotificationContext";
import { useEffect, useRef, useState } from "react";
import { QuickView } from "../../components/QuickView";
import { TaskCard } from "../../components/TaskCard";
import { AnimatePresence, motion } from "motion/react";
import "./Tasks.css";

const taskFilter = [
  {
    key: "all",
    label: "All",
    bg: "var(--clr-major)",
    clr: "var(--text-light)",
    empty: "No tasks yet. Create one!",
  },
  {
    key: "inProgress",
    label: "In progress",
    bg: "var(--clr-lite-violet)",
    empty: "Nothing in progress.",
  },
  {
    key: "highPriority",
    label: "High priority",
    bg: "var(--clr-major)",
    clr: "var(--text-light)",
    empty: "No high priority tasks",
  },
  {
    key: "overdue",
    label: "Overdue",
    bg: "#fff",
    empty: "No overdue tasks",
  },
  {
    key: "finished",
    label: "Finished",
    bg: "var(--clr-light-dark)",
    clr: "var(--text-light)",
    empty: "No finished tasks yet.",
  },
];

export function Tasks({
  todos,
  setTodos,
  loading,
  error,
  fetchTodo,
  onToggleStatus,
}) {
  const [activeFilter, setActiveFilter] = useState("all");
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
      <QuickView
        taskFilter={taskFilter}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      {todos.length === 0 && (
        <p
          style={{ color: "#959595", marginTop: "1rem", marginInline: "auto" }}
        >
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
