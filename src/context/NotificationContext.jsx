import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [hasNewTask, setHasNewTask] = useState(false);

  return (
    <NotificationContext.Provider value={{ hasNewTask, setHasNewTask }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}
