import { useState } from "react";
import { startOfDay } from "date-fns";
import { format } from "date-fns";
import "./Home.css";

const getGreeting = (hours) => {
  if (hours >= 4 && hours < 12) {
    return "Good morning";
  } else if (hours >= 12 && hours < 17) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

export function Home() {
  const currentDate = new Date();
  const greeting = getGreeting(currentDate.getHours());

  const savedUser = JSON.parse(localStorage.getItem("user"));
  const firstName = savedUser?.name?.split(" ")[0] || "There";

  return (
    <>
      <title>Tasky | Home</title>
      <div className="home-container">
        <div className="home-section">
          <div className="greet-and-date-section">
            <p>{format(currentDate, "EEE, MMM dd")}</p>
            <h1>
              {greeting}, <br /> {firstName || "There"}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
