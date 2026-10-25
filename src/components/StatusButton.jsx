import "./StatusButton.css";

export function StatusButton({ message, count = 0, active, onClick }) {
  return (
    <button
      className={`status-button ${active ? "active" : ""} ${count === 0 ? "empty" : ""}`}
      type="button"
      onClick={onClick}
    >
      <p>{message}</p>
      <div className="status-count">
        <p>{count}</p>
      </div>
    </button>
  );
}
