import "./StatusButton.css";

export function StatusButton({ message, bg }) {
  return (
    <div className="status-button">
      <p>{message}</p>
      <div className="status-count" style={{ backgroundColor: bg }}>
        <p>3</p>
      </div>
    </div>
  );
}
