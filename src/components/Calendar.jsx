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
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
          </div>
          <div className="next-month" onClick={handleNextMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
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
