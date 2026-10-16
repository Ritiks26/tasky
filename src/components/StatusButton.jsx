import "./StatusButton.css";

export function StatusButton({ message, bg, clr }) {
  return (
    <div className="status-button">
      <p>{message}</p>
      <div className="status-count" style={{ backgroundColor: bg }}>
        <p style={{ color: clr }}>3</p>
      </div>
    </div>
  );
}
