import "./TimerPicker.css";

export function TimerPicker() {
  return (
    <div className="date-picker-timer">
      <div className="date-picker-hours">
        <p>06</p>
      </div>
      :
      <div className="date-picker-minutes">
        <p>55</p>
      </div>
      <div className="date-picker-format">
        <p>AM</p>
      </div>
    </div>
  );
}
