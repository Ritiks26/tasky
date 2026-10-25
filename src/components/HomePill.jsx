import "./HomePill.css";

export function HomePill({ title, count = 0, bg, txt, countBg, countClr }) {
  return (
    <div className="home-pill" style={{ backgroundColor: bg }}>
      <p style={{ color: txt }}>{title}</p>
      <div className="home-pill-count" style={{ backgroundColor: countBg }}>
        <p style={{ color: countClr }}>{count}</p>
      </div>
    </div>
  );
}
