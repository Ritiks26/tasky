import { motion } from "motion/react";
import { useState, useMemo } from "react";
import { startOfDay } from "date-fns";
import { HomePill } from "../../components/HomePill";
import { getCardStats } from "../../utils/getCardStats";
import "./Home.css";

export function Home({ todos = [] }) {
  useState(startOfDay(new Date()));
  const stats = getCardStats(todos);

  return (
    <>
      <title>Tasky | Home</title>
      <div className="home-container">
        <h1>Manage your task</h1>

        <div className="quick-task-view">
          <HomePill
            title={"In progress"}
            bg={"var(--clr-violet)"}
            txt={"var(--text-light)"}
            count={stats.inProgress}
          />
          <HomePill
            title={"Overdue "}
            bg={"var(--clr-primary)"}
            txt={"var(--text-dark)"}
            count={stats.Overdue}
          />
          <HomePill
            title={"Finished"}
            bg={"var(--clr-light-dark)"}
            txt={"var(--text-light)"}
            count={stats.Finished}
          />
          <HomePill
            title={"High Priority"}
            bg={"var(--clr-major)"}
            txt={"var(--text-light)"}
            count={stats.highPriority}
          />
        </div>
      </div>
    </>
  );
}
