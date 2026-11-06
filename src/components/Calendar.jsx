import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  eachDayOfInterval,
  format,
  isSameMonth,
  addMonths,
  subMonths,
  isToday,
  isSameDay,
} from "date-fns";
import "./Calendar.css";
import { useState } from "react";

export function Calendar({
  activeDate,
  setActiveDate,
  setIsAddTaskOpen,
  isAddTaskOpen,
}) {
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });

  const calendarEnd = endOfMonth(monthEnd, {
    weekStartsOn: 0,
  });

  const days = eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd,
  });

  function handlePreviousMonth() {
    setCurrentMonth(subMonths(currentMonth, 1));
  }

  function handleNextMonth() {
    setCurrentMonth(addMonths(currentMonth, 1));
  }

  return (
    <div className="calendar-section">
      <div className="current-heading-date">
        <div className="change-calendar-month">
          <div className="prev-month" onClick={handlePreviousMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#fff"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </div>
          <div className="current-month-year">
            <h1>{format(currentMonth, "MMMM yyyy")}</h1>
          </div>
          <div className="next-month" onClick={handleNextMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#fff"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
          </div>
        </div>
        <div className="manage-task">
          <div className="today-date">
            <p>{format(currentDate, "EEE, dd MMM")}</p>
          </div>
          <div
            className="add-task-container"
            onClick={() => {
              setIsAddTaskOpen(!isAddTaskOpen);
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 2L22 6M2 22L3.2764 17.3199C3.35968 17.0145 3.40131 16.8619 3.46523 16.7195C3.52199 16.5931 3.59172 16.4729 3.67332 16.3609C3.76521 16.2348 3.87711 16.1229 4.1009 15.8991L14.4343 5.56569C14.6323 5.36768 14.7313 5.26867 14.8455 5.23158C14.9459 5.19895 15.0541 5.19895 15.1545 5.23158C15.2687 5.26867 15.3677 5.36768 15.5657 5.56569L18.4343 8.43431C18.6323 8.63232 18.7313 8.73133 18.7684 8.84549C18.8011 8.94591 18.8011 9.05409 18.7684 9.15451C18.7313 9.26867 18.6323 9.36768 18.4343 9.56569L8.1009 19.8991C7.87711 20.1229 7.76521 20.2348 7.63908 20.3267C7.52709 20.4083 7.40692 20.478 7.28052 20.5348C7.13815 20.5987 6.98548 20.6403 6.68014 20.7236L2 22Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Write Task</p>
          </div>
        </div>
      </div>

      <div className="weekdays-new">
        <p>Sun</p>
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
      </div>

      <div className="calendar-dates-new">
        {days.map((day) => {
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const today = isToday(day) && isCurrentMonth;
          const isActive = isCurrentMonth && isSameDay(day, activeDate);
          return (
            <div
              key={day}
              onClick={() => isCurrentMonth && setActiveDate(day)}
              className={`dates-new ${!isCurrentMonth ? "empty" : ""} ${today ? "today" : ""} ${isActive ? "active" : ""}`}
            >
              {isCurrentMonth ? format(day, "d") : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
