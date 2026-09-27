import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Login } from "./pages/auth/Login";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { Home } from "./pages/home/Home";
import { Task } from "./pages/Task/Task";
import { CalendarDates } from "./pages/calendar/CalendarDates";
import { Setting } from "./pages/setting/Setting";
import "./App.css";
import { Signup } from "./pages/auth/Signup";

function App() {
  const location = useLocation();
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const isSettings = !["/", "/tasks", "/calendar"].includes(location.pathname);

  return (
    <>
      {!isSettings && <Header />}
      <AddTask
        isAddTaskOpen={isAddTaskOpen}
        setIsAddTaskOpen={setIsAddTaskOpen}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 1,
            y: 0,
          }}
          // transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Task />} />
            <Route
              path="/calendar"
              element={
                <CalendarDates
                  isAddTaskOpen={isAddTaskOpen}
                  setIsAddTaskOpen={setIsAddTaskOpen}
                />
              }
            />
            <Route path="/setting" element={<Setting />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<Signup />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
