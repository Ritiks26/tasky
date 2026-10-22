import "./StatusButton.css";

export function StatusButton({ message, bg, clr, count = 0, active, onClick }) {
  return (
    <button
      className={`status-button ${active ? "active" : ""} ${count === 0 ? "empty" : ""}`}
      type="button"
      onClick={onClick}
    >
      <p>{message}</p>
      <div className="status-count" style={{ backgroundColor: bg }}>
        <p style={{ color: clr }}>{count}</p>
      </div>
    </button>
  );
}
