import { format } from "date-fns";
import { useState } from "react";
import { Calendar } from "../../components/Calendar";
import { AddTask } from "../../components/AddTask";
import { DatePicker } from "../../components/DatePicker";
import "./CalendarDates.css";

export function CalendarDates() {
  const currentDate = new Date();
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

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
      <Calendar />
      <AddTask
        isAddTaskOpen={isAddTaskOpen}
        setIsAddTaskOpen={setIsAddTaskOpen}
        isDatePickerOpen={isDatePickerOpen}
        setIsDatePickerOpen={setIsDatePickerOpen}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <DatePicker
        isDatePickerOpen={isDatePickerOpen}
        setIsDatePickerOpen={setIsDatePickerOpen}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </div>
  );
}
