function StatCard({ icon, title, value, description, type }) {
  return (
    <div className={`stat-card ${type || ""}`}>
      <div className="stat-icon">
        {icon}
      </div>

      <div className="stat-content">
        <p>{title}</p>
        <h2>{value}</h2>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default StatCard;