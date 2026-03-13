import "../styles/sections.css";

const STATS = [
  { number: "13", suffix: "+", label: "Years of Experience" },
  { number: "5000", suffix: "+", label: "Happy Patients" },
  { number: "10000", suffix: "+", label: "Procedures Done" },
  { number: "98", suffix: "%", label: "Success Rate" },
];

export default function Stats() {
  return (
    <div className="stats-bar">
      {STATS.map(({ number, suffix, label }) => (
        <div className="stat-item" key={label}>
          <div className="stat-number">
            {number}
            <sup>{suffix}</sup>
          </div>
          <div className="stat-label">{label}</div>
        </div>
      ))}
    </div>
  );
}
