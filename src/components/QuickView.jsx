import { StatusButton } from "./StatusButton";
import "./QuickView.css";

export function QuickView({
  taskFilter,
  activeFilter,
  setActiveFilter,
  counts,
}) {
  return (
    <div className="quick-view">
      <div className="quick-view-filter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
        </svg>
      </div>

      {taskFilter.map((filter) => (
        <StatusButton
          key={filter.key}
          message={filter.label}
          count={counts[filter.key]}
          active={activeFilter === filter.key}
          onClick={() => setActiveFilter(filter.key)}
        />
      ))}
    </div>
  );
}
