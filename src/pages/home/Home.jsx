import { HomePill } from "../../components/HomePill";
import "./Home.css";

export function Home() {
  return (
    <div className="home-container">
      <h1>Manage your task</h1>

      <div className="quick-task-view">
        <HomePill title={"In progress"} />
        <HomePill title={"In review"} />
        <HomePill title={"In progress"} />
        <HomePill title={"In review"} />
      </div>

      <div className="task-schedule">
        <div className="days-filter">
          <div className="calender-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 25 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 22V8C1 5.79086 2.79086 4 5 4H20C22.2091 4 24 5.79086 24 8V22C24 24.2091 22.2091 26 20 26H12.5H5C2.79086 26 1 24.2091 1 22Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M6 3.5V1"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M18 3V1"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 16.25C9.79493 16.25 11.25 17.7051 11.25 19.5C11.25 21.2949 9.79493 22.75 8 22.75C6.20507 22.75 4.75 21.2949 4.75 19.5C4.75 17.7051 6.20507 16.25 8 16.25ZM17 16.25C18.7949 16.25 20.25 17.7051 20.25 19.5C20.25 21.2949 18.7949 22.75 17 22.75C15.2051 22.75 13.75 21.2949 13.75 19.5C13.75 17.7051 15.2051 16.25 17 16.25ZM8 7.75C9.79493 7.75 11.25 9.20507 11.25 11C11.25 12.7949 9.79493 14.25 8 14.25C6.20507 14.25 4.75 12.7949 4.75 11C4.75 9.20507 6.20507 7.75 8 7.75ZM17 7.75C18.7949 7.75 20.25 9.20507 20.25 11C20.25 12.7949 18.7949 14.25 17 14.25C15.2051 14.25 13.75 12.7949 13.75 11C13.75 9.20507 15.2051 7.75 17 7.75Z"
                stroke="black"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="day">
            <p>Day</p>
          </div>
          <div className="week">
            <p>Week</p>
          </div>
          <div className="month">
            <p>Month</p>
          </div>
        </div>
        <div className="schedule-charts-container">
          <div className="schedule-charts">
            <div className="bars"></div>
            <div className="bars"></div>
            <div className="bars"></div>
            <div className="bars"></div>
            <div className="bars"></div>
            <div className="bars"></div>
            <div className="bars"></div>
          </div>
          <div className="schedule-weekdays">
            <p>S</p>
            <p>M</p>
            <p>T</p>
            <p>W</p>
            <p>T</p>
            <p>F</p>
            <p>S</p>
          </div>
          <div className="schedule-dates">
            <div className="dates">8</div>
            <div className="dates">9</div>
            <div className="dates">10</div>
            <div className="dates">11</div>
            <div className="dates">12</div>
            <div className="dates">13</div>
            <div className="dates">14</div>
          </div>
        </div>
      </div>
    </div>
  );
}
