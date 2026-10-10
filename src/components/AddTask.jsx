import { easeOut, motion, useAnimation } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useNotification } from "../context/NotificationContext";
import axios from "axios";
import "./AddTask.css";

const priorityTask = ["Low", "Medium", "High"];
const priorityMessages = {
  Low: "Fewer reminders. Stay relaxed.",
  Medium: "Regular reminders to keep you on track.",
  High: "Repeated reminders until it's done.",
};

export function AddTask({
  isAddTaskOpen,
  isDatePickerOpen,
  setIsDatePickerOpen,
  selectedDate,
  setSelectedDate,
}) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low");
  const [sliderWrapperWidth, setSliderWrapperWidth] = useState(0);
  const [loading, setLoading] = useState(false);
  const sliderWrapperRef = useRef(null);
  const controls = useAnimation();
  const { setHasNewTask } = useNotification();

  useEffect(() => {
    if (sliderWrapperRef.current) {
      const wrapperWidth = sliderWrapperRef.current.offsetWidth;
      setSliderWrapperWidth(wrapperWidth);
    }
  }, []);

  const handleAddTask = async () => {
    if (!taskTitle.trim()) return;

    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/todos`,
        {
          title: taskTitle,
          priority: taskPriority.toLowerCase(),
          dueDate: selectedDate ? selectedDate.toISOString() : null,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      console.log("task added", res.data);
      setHasNewTask(true);
      setTaskTitle("");
      setTaskPriority("Low");
      setSelectedDate(null);
    } catch (err) {
      console.log(err.response?.data?.message || "something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="add-task"
      initial={{ y: "110%" }}
      animate={{ y: isAddTaskOpen ? "0%" : "110%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="add-task-container">
        <div className="input-container">
          {" "}
          <input
            type="text"
            placeholder=" "
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <label htmlFor="text">Add Task</label>
          <div
            className="date-picker"
            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
          >
            {" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 25 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 22V8C1 5.79086 2.79086 4 5 4H20C22.2091 4 24 5.79086 24 8V22C24 24.2091 22.2091 26 20 26H12.5H5C2.79086 26 1 24.2091 1 22Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M6 3.5V1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 3V1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 16.25C9.79493 16.25 11.25 17.7051 11.25 19.5C11.25 21.2949 9.79493 22.75 8 22.75C6.20507 22.75 4.75 21.2949 4.75 19.5C4.75 17.7051 6.20507 16.25 8 16.25ZM17 16.25C18.7949 16.25 20.25 17.7051 20.25 19.5C20.25 21.2949 18.7949 22.75 17 22.75C15.2051 22.75 13.75 21.2949 13.75 19.5C13.75 17.7051 15.2051 16.25 17 16.25ZM8 7.75C9.79493 7.75 11.25 9.20507 11.25 11C11.25 12.7949 9.79493 14.25 8 14.25C6.20507 14.25 4.75 12.7949 4.75 11C4.75 9.20507 6.20507 7.75 8 7.75ZM17 7.75C18.7949 7.75 20.25 9.20507 20.25 11C20.25 12.7949 18.7949 14.25 17 14.25C15.2051 14.25 13.75 12.7949 13.75 11C13.75 9.20507 15.2051 7.75 17 7.75Z"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>

        <div className="set-priority">
          {priorityTask.map((task) => (
            <div
              key={task}
              className="task"
              onClick={() => setTaskPriority(task)}
            >
              <p>{task}</p>
              {taskPriority === task && (
                <motion.div
                  className="active-task-priority"
                  layoutId="active-priority"
                  transition={{ ease: "easeInOut" }}
                ></motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="priority-message">
          <p>{priorityMessages[taskPriority]}</p>
        </div>

        {selectedDate && (
          <span
            style={{
              color: "white",
              fontSize: "0.8rem",
              marginLeft: "4px",
            }}
          >
            {new Date(selectedDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
            })}
          </span>
        )}

        <div className="add-task-button">
          <p>{loading ? "Adding" : "Add Task"}</p>{" "}
          <div className="slider-wrapper" ref={sliderWrapperRef}>
            <motion.div
              className="add-task-slider"
              drag="x"
              animate={controls}
              initial={{ x: 0 }}
              dragConstraints={sliderWrapperRef}
              dragElastic={0}
              dragMomentum={false}
              onDragEnd={(e, info) => {
                if (info.offset.x > sliderWrapperWidth / 1.5) {
                  handleAddTask();
                  controls.start({
                    x: 0,
                    transition: {
                      type: "tween",
                      duration: 0.2,
                      ease: easeOut,
                    },
                  });
                } else {
                  controls.start({
                    x: 0,
                    transition: {
                      type: "tween",
                      duration: 0.2,
                      ease: easeOut,
                    },
                  });
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
