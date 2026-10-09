import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { PublicRoute } from "./components/PublicRoute";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Signup } from "./pages/auth/Signup";
import { Login } from "./pages/auth/Login";
import { Header } from "./components/Header";
import { Home } from "./pages/home/Home";
import { Task } from "./pages/Task/Task";
import { CalendarDates } from "./pages/calendar/CalendarDates";
import { Setting } from "./pages/setting/Setting";
import "./App.css";

function App() {
  const location = useLocation();

  const isSettings = !["/", "/tasks", "/calendar"].includes(location.pathname);

  return (
    <>
      {!isSettings && <Header />}
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
        >
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <Task />
                </ProtectedRoute>
              }
            />
            <Route
              path="/calendar"
              element={
                <ProtectedRoute>
                  <CalendarDates />
                </ProtectedRoute>
              }
            />
            <Route
              path="/setting"
              element={
                <ProtectedRoute>
                  <Setting />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default App;
