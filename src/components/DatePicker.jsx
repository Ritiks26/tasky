import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns";
import { useState } from "react";
import { motion } from "motion/react";
import "./DatePicker.css";

export function DatePicker({ isDatePickerOpen, setIsDatePickerOpen }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 });

  const calendarEnd = endOfWeek(monthEnd, {
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
    <motion.div
      initial={{ opacity: 0, display: "none" }}
      animate={{
        display: isDatePickerOpen ? "block" : "none",
        opacity: isDatePickerOpen ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="date-picker-parent"
    >
      <div className="date-picker-section">
        <div className="date-picker-header">
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
          <div className="date-picker-date">
            <p>{format(currentMonth, "MMMM yyyy")}</p>
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
        <div className="date-picker-weekdays">
          <p>S</p>
          <p>M</p>
          <p>T</p>
          <p>W</p>
          <p>T</p>
          <p>F</p>
          <p>S</p>
        </div>
        <div className="date-picker-dates">
          {days.map((day) => {
            const isCurrentMonth = isSameMonth(day, currentMonth);
            const isSelected = selectedDate && isSameDay(selectedDate, day);
            return (
              <div
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`dates-each ${!isCurrentMonth ? "empty" : ""} ${isSelected ? "active" : ""}`}
              >
                {isCurrentMonth ? format(day, "d") : ""}
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="close-date-picker"
        onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </div>
    </motion.div>
  );
}
