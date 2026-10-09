import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import { Menus } from "./components/Menus.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NotificationProvider>
      <App />
      <Menus />
    </NotificationProvider>
  </BrowserRouter>,
);
