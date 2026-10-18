import { endOfDay, format, isSameDay, startOfDay } from "date-fns";
import { useState } from "react";
import { Calendar } from "../../components/Calendar";
import { AddTask } from "../../components/AddTask";
import { DatePicker } from "../../components/DatePicker";
import "./CalendarDates.css";

export function CalendarDates({ fetchTodo, todos }) {
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
          {format(currentDate, "dd.MM.yyyy")}
        </div>
        <div
          className="add-task-btn"
          onClick={() => setIsAddTaskOpen(!isAddTaskOpen)}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 12 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.07125 10.2095L6.75118 0.74291C6.88992 0.51168 7.18703 0.432121 7.42275 0.563079L11.036 2.57047C11.2877 2.71026 11.3696 3.03313 11.2151 3.27598L8 8.32822L5.08979 13.1786C5.03165 13.2755 4.9424 13.3498 4.8366 13.3895L1.67556 14.5749C1.34869 14.6975 1 14.4558 1 14.1067V10.4667C1 10.3761 1.02463 10.2872 1.07125 10.2095Z"
              stroke="white"
              strokeLinecap="round"
            />
            <path d="M0.5 16.3282H11" stroke="white" strokeLinecap="round" />
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
        <h1>{format(activeDate, "dd MMM")}</h1>

        {dayTodos.length === 0 && <p>No schedule task for this day!</p>}

        {dayTodos.map((todo) => (
          <div className="day-task-card" key={todo.id}>
            <div className="upper-card">
              <div className="card-title">
                <p>{todo.title}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
}
