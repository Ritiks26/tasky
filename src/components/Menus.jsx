import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import "./Menus.css";

const menus = [
  {
    title: "home",
    svg: (
      <>
        {" "}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 21V10.6371C1 10.0243 1.28092 9.44534 1.76226 9.0661L10.7623 1.97519C11.4883 1.40317 12.5117 1.40317 13.2377 1.97519L22.2377 9.0661C22.7191 9.44534 23 10.0243 23 10.6371V21C23 22.1046 22.1046 23 21 23H3C1.89543 23 1 22.1046 1 21Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M2 8V3.5V3C2 1.89543 2.89543 1 4 1H6C7.10457 1 8 1.89543 8 3V4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 23V15C9 13.8954 9.89543 13 11 13H13C14.1046 13 15 13.8954 15 15V16.6842"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </>
    ),
    link: "/",
  },
  {
    title: "tasks",
    svg: (
      <>
        {" "}
        <svg
          width="20"
          height="20"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 27V5C1 2.79086 2.79086 1 5 1H27C29.2091 1 31 2.79086 31 5V27C31 29.2091 29.2091 31 27 31H5C2.79086 31 1 29.2091 1 27Z"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M8 16.7037L10.7661 20.2747C11.4846 21.2022 12.8435 21.3149 13.705 20.5184L24 11"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </>
    ),
    link: "/tasks",
  },
  {
    title: "calendar",
    svg: (
      <>
        {" "}
        <svg
          width="20"
          height="20"
          viewBox="0 0 25 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 22V8C1 5.79086 2.79086 4 5 4H20C22.2091 4 24 5.79086 24 8V22C24 24.2091 22.2091 26 20 26H12.5H5C2.79086 26 1 24.2091 1 22Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 3.5V1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 3V1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 16.25C9.79493 16.25 11.25 17.7051 11.25 19.5C11.25 21.2949 9.79493 22.75 8 22.75C6.20507 22.75 4.75 21.2949 4.75 19.5C4.75 17.7051 6.20507 16.25 8 16.25ZM17 16.25C18.7949 16.25 20.25 17.7051 20.25 19.5C20.25 21.2949 18.7949 22.75 17 22.75C15.2051 22.75 13.75 21.2949 13.75 19.5C13.75 17.7051 15.2051 16.25 17 16.25ZM8 7.75C9.79493 7.75 11.25 9.20507 11.25 11C11.25 12.7949 9.79493 14.25 8 14.25C6.20507 14.25 4.75 12.7949 4.75 11C4.75 9.20507 6.20507 7.75 8 7.75ZM17 7.75C18.7949 7.75 20.25 9.20507 20.25 11C20.25 12.7949 18.7949 14.25 17 14.25C15.2051 14.25 13.75 12.7949 13.75 11C13.75 9.20507 15.2051 7.75 17 7.75Z"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      </>
    ),
    link: "/calendar",
  },
  {
    title: "setting",
    svg: (
      <>
        {" "}
        <svg
          width="20"
          height="20"
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
    link: "/setting",
  },
];

export function Menus() {
  const navigate = useNavigate();
  const location = useLocation();

  const authRoutes = ["/login", "/signup"];
  const hideMenus = authRoutes.includes(location.pathname);

  if (hideMenus) {
    return null;
  }

  const getActiveMenu = (pathname) =>
    menus.find((menu) => menu.link === pathname)?.title || "home";

  const activeMenu = getActiveMenu(location.pathname);

  const handleMenuClick = (menu) => {
    setTimeout(() => {
      navigate(menu.link);
    }, 200);
  };

  return (
    <div className="menus-container">
      {menus.map((menu) => (
        <div
          className="menu-item"
          key={menu.title}
          onClick={() => handleMenuClick(menu)}
        >
          {menu.svg}
          {activeMenu === menu.title && (
            <motion.div
              className="menu-active-btn"
              layoutId="active-menu"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
            ></motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
