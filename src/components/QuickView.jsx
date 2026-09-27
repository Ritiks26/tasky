import { StatusButton } from "./StatusButton";
import "./QuickView.css";

export function QuickView() {
  return (
    <div className="quick-view">
      <div className="quick-view-filter">
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="5"
            cy="5"
            r="4"
            fill="#F0F0F0"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M5 10V21"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15 13C17.2091 13 19 14.7909 19 17C19 19.2091 17.2091 21 15 21C12.7909 21 11 19.2091 11 17C11 14.7909 12.7909 13 15 13Z"
            fill="#F0F0F0"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d="M15 1V7V12"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <StatusButton message={"In progress"} />
      <StatusButton message={"Finished"} />
      <StatusButton message={"Due"} />
    </div>
  );
}
