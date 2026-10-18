import "./HomePill.css";

export function HomePill({ title, count = 0, bg, txt }) {
  return (
    <div className="home-pill" style={{ backgroundColor: bg }}>
      <p style={{ color: txt }}>{title}</p>
      <div className="home-pill-count">
        <p>{count}</p>
      </div>
    </div>
  );
}
