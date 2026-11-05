import { motion } from "motion/react";
import { useState, useMemo } from "react";
import { startOfDay } from "date-fns";
import { HomePill } from "../../components/HomePill";
import { getCardStats } from "../../utils/getCardStats";
import { format } from "date-fns";
import "./Home.css";

export function Home({ todos = [] }) {
  useState(startOfDay(new Date()));
  const stats = getCardStats(todos);
  const currentDate = new Date();
  const savedUser = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <title>Tasky | Home</title>
      <div className="home-container">
        {/* <h1>Manage your task</h1> */}

        {/* <div className="quick-task-view">
          <HomePill
            title={"In progress"}
            bg={"var(--clr-violet)"}
            txt={"var(--text-light)"}
            count={stats.inProgress}
            countBg={"var(--clr-main)"}
            countClr={"var(--text-dark)"}
          />
          <HomePill
            title={"Overdue "}
            bg={"var(--clr-main)"}
            txt={"var(--text-dark)"}
            count={stats.Overdue}
            countBg={"var(--clr-light-dark)"}
            countClr={"var(--text-light)"}
          />
          <HomePill
            title={"Finished"}
            bg={"var(--clr-light-dark)"}
            txt={"var(--text-light)"}
            count={stats.Finished}
            countBg={"var(--clr-main)"}
            countClr={"var(--text-dark)"}
          />
          <HomePill
            title={"High Priority"}
            bg={"var(--clr-major)"}
            txt={"var(--text-light)"}
            count={stats.highPriority}
            countBg={"var(--clr-main)"}
            countClr={"var(--text-dark)"}
          />
        </div> */}

        <div className="home-section">
          <div className="greet-and-date-section">
            <p>{format(currentDate, "EEE, MMM dd")}</p>
            <h1>
              Good morning, <br /> {savedUser?.name || "There"}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
