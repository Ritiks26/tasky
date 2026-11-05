import "./Header.css";

export function Header() {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  return (
    <header>
      <div className="user-profile"></div>

      <div className="right-section-header">
        <div className="profile-wrapper">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQzH4DvC4qso3pM0mEsXUP_r1HQc-rNEGylNONlnj5v589j31yo"
            alt="user profile picture"
          />
        </div>
      </div>
    </header>
  );
}
