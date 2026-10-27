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
        <div className="upper-calendar">
          <div className="check-calendar">
            <div className="calendar-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 25 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 22V8C1 5.79086 2.79086 4 5 4H20C22.2091 4 24 5.79086 24 8V22C24 24.2091 22.2091 26 20 26H12.5H5C2.79086 26 1 24.2091 1 22Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6 3.5V1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M18 3V1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M8 16.25C9.79493 16.25 11.25 17.7051 11.25 19.5C11.25 21.2949 9.79493 22.75 8 22.75C6.20507 22.75 4.75 21.2949 4.75 19.5C4.75 17.7051 6.20507 16.25 8 16.25ZM17 16.25C18.7949 16.25 20.25 17.7051 20.25 19.5C20.25 21.2949 18.7949 22.75 17 22.75C15.2051 22.75 13.75 21.2949 13.75 19.5C13.75 17.7051 15.2051 16.25 17 16.25ZM8 7.75C9.79493 7.75 11.25 9.20507 11.25 11C11.25 12.7949 9.79493 14.25 8 14.25C6.20507 14.25 4.75 12.7949 4.75 11C4.75 9.20507 6.20507 7.75 8 7.75ZM17 7.75C18.7949 7.75 20.25 9.20507 20.25 11C20.25 12.7949 18.7949 14.25 17 14.25C15.2051 14.25 13.75 12.7949 13.75 11C13.75 9.20507 15.2051 7.75 17 7.75Z"
                  stroke="black"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            {format(currentDate, "d MMMM yyyy")}
          </div>
          <div
            className="add-task-btn"
            onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}
          >
            <svg
              width="65%"
              height="65%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2L22 6M2 22L3.2764 17.3199C3.35968 17.0145 3.40131 16.8619 3.46523 16.7195C3.52199 16.5931 3.59172 16.4729 3.67332 16.3609C3.76521 16.2348 3.87711 16.1229 4.1009 15.8991L14.4343 5.56569C14.6323 5.36768 14.7313 5.26867 14.8455 5.23158C14.9459 5.19895 15.0541 5.19895 15.1545 5.23158C15.2687 5.26867 15.3677 5.36768 15.5657 5.56569L18.4343 8.43431C18.6323 8.63232 18.7313 8.73133 18.7684 8.84549C18.8011 8.94591 18.8011 9.05409 18.7684 9.15451C18.7313 9.26867 18.6323 9.36768 18.4343 9.56569L8.1009 19.8991C7.87711 20.1229 7.76521 20.2348 7.63908 20.3267C7.52709 20.4083 7.40692 20.478 7.28052 20.5348C7.13815 20.5987 6.98548 20.6403 6.68014 20.7236L2 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <Calendar activeDate={activeDate} setActiveDate={setActiveDate} />
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
          <p>Task schedule for {format(activeDate, "dd MMM")}</p>

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
