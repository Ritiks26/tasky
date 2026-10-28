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

export function Calendar({ activeDate, setActiveDate }) {
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
        <div className="current-month-year">
          <h1>{format(currentMonth, "MMMM yyyy")}</h1>
        </div>

        <div className="change-month">
          <div className="prev-month" onClick={handlePreviousMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </div>
          <div className="next-month" onClick={handleNextMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
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
