import { motion } from "motion/react";
import "./TaskCard.css";

export function TaskCard({ todo, onSwipeDelete, onToggleStatus }) {
  const isDone = todo.completed;

  return (
    <motion.div
      className={`task-card ${isDone ? "toggled" : ""}`}
      layout
      drag="x"
      dragElastic={0.1}
      dragConstraints={{ left: -220, right: 0 }}
      dragSnapToOrigin
      animate={{
        scale: isDone ? 0.95 : 1,
        opacity: isDone ? 0.75 : 1,
      }}
      exit={{ opacity: 0, x: -400, height: 0, marginBottom: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      whileDrag={{ scale: 0.95, opacity: 0.75 }}
      onDragEnd={(e, info) => {
        if (info.offset.x < -220) {
          onSwipeDelete(todo);
        }
      }}
    >
      <div className="upper-card">
        <div className="card-title">
          <p>{todo.title}</p>
        </div>
        <div
          className="task-status-toggle"
          onClick={() => onToggleStatus(todo)}
        >
          <div
            className={`task-toggle-slider ${isDone ? "toggled" : ""}`}
          ></div>
        </div>
      </div>

      <div className="lower-card">
        <div className="task-timeline">
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>
            {todo.createdAt
              ? new Date(todo.createdAt).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })
              : "N/A"}{" "}
            {todo.dueDate ? "-" : ""}{" "}
            {todo.dueDate
              ? new Date(todo.dueDate).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                })
              : ""}
          </p>
        </div>
        <div className="task-priority">
          <p>{todo.priority} Priority</p>
        </div>
      </div>
    </motion.div>
  );
}
