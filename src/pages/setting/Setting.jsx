import { useNavigate } from "react-router-dom";
import "./Setting.css";

const setting = [
  {
    title: "Settings",
    svg: (
      <>
        {" "}
        <svg
          width="20"
          height="23"
          viewBox="0 0 9 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.125 2.6474L4.125 0.1474L8.125 2.6474V6.6474L4.125 9.1474L0.125 6.6474V2.6474Z"
            stroke="white"
            strokeWidth="0.75"
            strokeLinecap="round"
          />
          <circle
            cx="4.125"
            cy="4.6474"
            r="0.875"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
      </>
    ),
  },
  {
    title: "Notifications",
    svg: (
      <>
        {" "}
        <svg
          width="20"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z"
            stroke="#f0f0f0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
  },
  {
    title: "Help Center",
    svg: (
      <>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="23"
          fill="#f0f0f0"
          className="bi bi-question-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
        </svg>
      </>
    ),
  },
  {
    title: "Give us feedback",
    svg: (
      <>
        {" "}
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6044 4.83595C12.4477 6.01579 11.659 6.83272 11.659 6.83272L4.9233 13.5776C4.84043 13.6606 4.7436 13.7283 4.63724 13.7778L1.92357 15.0392C1.16164 15.3934 0.329079 14.707 0.531497 13.8915L1.06219 11.7535C1.1057 11.5782 1.19587 11.418 1.32311 11.2898L7.73349 4.83347L9.39853 3.13267M13.6044 4.83595C13.9433 4.49029 14.3138 4.11348 14.7052 3.71694C15.792 2.61606 14.4006 -0.0366113 12.0882 0.596893C11.507 0.756135 10.8641 1.81407 10.302 2.2993C9.20123 3.24961 7.73349 4.83347 7.73349 4.83347M10.302 2.2993L13.6044 4.83595"
            stroke="#f0f0f0"
          />
        </svg>
      </>
    ),
  },
];

export function Setting() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="settings-container">
      <div className="setting-profile">
        <div className="profile-picture">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzH4DvC4qso3pM0mEsXUP_r1HQc-rNEGylNONlnj5v589j31yo"
            alt="user profile picture"
          />
        </div>
        <div className="user-detail">
          <div className="user-name">
            <p>Ritik Singh</p>
          </div>
          <div className="edit-profile">
            <p>Edit profile</p>
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.500008 0.500015L3.34922 2.94219C3.72371 3.26319 4.27631 3.26319 4.6508 2.94219L7.50001 0.500015"
                strokeWidth="1"
                stroke="#f0f0f0"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="settings-other">
        {setting.map((action) => (
          <div key={action.title} className="setting-wrapper">
            <div className="setting-left-section">
              <div className="seeing-icon"> {action.svg}</div>
              <div className="setting-title">
                <p>{action.title}</p>
              </div>
            </div>
            <div className="setting-right-section">
              {" "}
              <svg
                width="12"
                height="8"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.500008 0.500015L3.34922 2.94219C3.72371 3.26319 4.27631 3.26319 4.6508 2.94219L7.50001 0.500015"
                  stroke="white"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="logout-action">
        <svg
          width="20"
          height="20"
          viewBox="0 0 92 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39 3C19.1177 3 3 19.7893 3 40.5C3 61.2107 19.1177 78 39 78"
            stroke="#f0f0f0"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M90.6213 42.1213C91.7929 40.9497 91.7929 39.0503 90.6213 37.8787L71.5294 18.7868C70.3579 17.6152 68.4584 17.6152 67.2868 18.7868C66.1152 19.9584 66.1152 21.8579 67.2868 23.0294L84.2574 40L67.2868 56.9706C66.1152 58.1421 66.1152 60.0416 67.2868 61.2132C68.4584 62.3848 70.3579 62.3848 71.5294 61.2132L90.6213 42.1213ZM28 40V43H88.5V40V37H28V40Z"
            fill="#f0f0f0"
          />
        </svg>

        <p onClick={handleLogout}>Log out</p>
      </div>
    </div>
  );
}
