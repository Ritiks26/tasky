import { endOfDay, format, isSameDay, startOfDay } from "date-fns";
import { motion } from "motion/react";
import { useState } from "react";
import { Calendar } from "../../components/Calendar";
import { AddTask } from "../../components/AddTask";
import { DatePicker } from "../../components/DatePicker";
import "./CalendarDates.css";

export function CalendarDates({ fetchTodo, todos, onToggleStatus }) {
  const [activeDate, setActiveDate] = useState(new Date());
  const currentDate = new Date();
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const dayTodos = todos.filter((todo) => {
    const start = startOfDay(new Date(todo.createdAt));
    const end = endOfDay(new Date(todo.dueDate || todo.createdAt));

    return activeDate >= start && activeDate <= end;
  });

  return (
    <>
      <title>Tasky | Calendar</title>
      <div className="calendar-container">
        <h1>Task schedule</h1>
        <Calendar
          activeDate={activeDate}
          setActiveDate={setActiveDate}
          setIsAddTaskOpen={setIsAddTaskOpen}
          isAddTaskOpen={isAddTaskOpen}
        />
        <AddTask
          isAddTaskOpen={isAddTaskOpen}
          setIsAddTaskOpen={setIsAddTaskOpen}
          isDatePickerOpen={isDatePickerOpen}
          setIsDatePickerOpen={setIsDatePickerOpen}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          fetchTodo={fetchTodo}
        />
        <DatePicker
          isDatePickerOpen={isDatePickerOpen}
          setIsDatePickerOpen={setIsDatePickerOpen}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        <hr
          style={{
            border: "none",
            borderBottom: "1px solid #b1b1b1",
            margin: "1.5rem 0 0.5rem 0",
          }}
        />

        <div className="day-tasks-card">
          <p style={{ marginBottom: "0.5rem", color: "var(--text-light)" }}>
            Task schedule for {format(activeDate, "dd MMM")}
          </p>

          {dayTodos.length === 0 && (
            <p
              style={{
                color: "#959595",
                marginTop: "4rem",
                marginInline: "auto",
              }}
            >
              No task schedule!
            </p>
          )}

          {dayTodos.map((todo) => {
            const isDone = todo.completed;

            return (
              <motion.div
                key={todo.id}
                className={`task-card ${isDone ? "toggled" : ""}`}
                layout
                dragSnapToOrigin
                animate={{
                  scale: isDone ? 0.95 : 1,
                  opacity: isDone ? 0.75 : 1,
                }}
              >
                <div className="upper-card">
                  <div className="card-title">
                    <p>{todo.title}</p>
                  </div>
                  <div className="task-status-priority-container">
                    <div className={`task-priority ${todo.priority}`}>
                      <p>{todo.priority}</p>
                    </div>
                    <div className="task-status-container">
                      <div className="task-status-message">
                        <p>{isDone ? "finished" : "pending"}</p>
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
                        stroke="#9b9b9b"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>
                      {todo.dueDate ? "Due on " : "Created on "}
                      {new Date(todo.dueDate || todo.createdAt).toLocaleString(
                        "en-GB",
                        {
                          month: "short",
                          day: "2-digit",
                        },
                      )}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
