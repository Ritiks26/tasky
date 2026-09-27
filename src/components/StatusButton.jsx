import "./StatusButton.css";

export function StatusButton({ message }) {
  return (
    <div className="status-button">
      <p>{message}</p>
    </div>
  );
}
