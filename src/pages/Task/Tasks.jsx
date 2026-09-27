import { QuickView } from "../../components/QuickView";
import "./Tasks.css";

export function Tasks() {
  return (
    <div className="tasks-container">
      <QuickView />
      <div className="task-card">
        <div className="upper-card">
          <div className="card-title">
            <p>Web application user registration process</p>
          </div>

          <div className="visit-task"></div>
        </div>

        <div className="lower-card">
          <div className="task-timeline">
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>10.00AM - 05.30PM</p>
          </div>

          <div className="task-priority">
            <p>High Priority</p>
          </div>
        </div>
      </div>
      <div className="task-card">
        <div className="upper-card">
          <div className="card-title">
            <p>Web application user registration process</p>
          </div>

          <div className="visit-task"></div>
        </div>

        <div className="lower-card">
          <div className="task-timeline">
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>10.00AM - 05.30PM</p>
          </div>

          <div className="task-priority">
            <p>High Priority</p>
          </div>
        </div>
      </div>
      <div className="task-card">
        <div className="upper-card">
          <div className="card-title">
            <p>Web application user registration process</p>
          </div>

          <div className="visit-task"></div>
        </div>

        <div className="lower-card">
          <div className="task-timeline">
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>10.00AM - 05.30PM</p>
          </div>

          <div className="task-priority">
            <p>High Priority</p>
          </div>
        </div>
      </div>
    </div>
  );
}
