import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
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
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const isSettings = !["/", "/tasks", "/calendar"].includes(location.pathname);

  const fetchTodo = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setTodos([]);
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/todos`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(res.data.todos);
    } catch (err) {
      const message = err.response?.data?.message || "something wwnt wrong";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

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
                  <Task
                    todos={todos}
                    setTodos={setTodos}
                    loading={loading}
                    error={error}
                    fetchTodo={fetchTodo}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/calendar"
              element={
                <ProtectedRoute>
                  <CalendarDates fetchTodo={fetchTodo} todos={todos} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/setting"
              element={
                <ProtectedRoute>
                  <Setting setTodos={setTodos} />
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login fetchTodo={fetchTodo} />
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
