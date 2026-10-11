function Reports({ patients, beds, surgeries }) {
  const occupiedBeds = beds.filter(
    (bed) => bed.status === "Occupied"
  ).length;

  const bedPercentage =
    beds.length === 0
      ? 0
      : Math.round((occupiedBeds / beds.length) * 100);

  const emergencyCount = patients.filter(
    (patient) => patient.priority === "Emergency"
  ).length;

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h2>Reports & Analytics</h2>
          <p>
            Hospital resource utilization and scheduling
            statistics.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => window.print()}
        >
          🖨️ Print Report
        </button>
      </div>

      <div className="report-cards">
        <div className="report-card">
          <span>Bed Utilization</span>
          <strong>{bedPercentage}%</strong>
          <div className="mini-progress">
            <div
              style={{
                width: `${bedPercentage}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="report-card">
          <span>OR Utilization</span>
          <strong>82%</strong>
          <div className="mini-progress">
            <div style={{ width: "82%" }}></div>
          </div>
        </div>

        <div className="report-card">
          <span>Total Patients</span>
          <strong>{patients.length}</strong>
          <p>Registered patients</p>
        </div>

        <div className="report-card">
          <span>Emergency Cases</span>
          <strong>{emergencyCount}</strong>
          <p>High priority cases</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <h3>Hospital Bed Status</h3>

          <div className="chart-area">
            <div className="chart-bar">
              <span>Available</span>
              <div>
                <i style={{ width: "38%" }}></i>
              </div>
              <strong>45</strong>
            </div>

            <div className="chart-bar">
              <span>Occupied</span>
              <div>
                <i style={{ width: "65%" }}></i>
              </div>
              <strong>75</strong>
            </div>

            <div className="chart-bar">
              <span>Reserved</span>
              <div>
                <i style={{ width: "15%" }}></i>
              </div>
              <strong>10</strong>
            </div>
          </div>
        </div>

        <div className="dashboard-panel">
          <h3>Priority Distribution</h3>

          <div className="priority-report">
            <div>
              <span className="priority-dot emergency-dot"></span>
              Emergency
              <strong>
                {
                  patients.filter(
                    (p) => p.priority === "Emergency"
                  ).length
                }
              </strong>
            </div>

            <div>
              <span className="priority-dot critical-dot"></span>
              Critical
              <strong>
                {
                  patients.filter(
                    (p) => p.priority === "Critical"
                  ).length
                }
              </strong>
            </div>

            <div>
              <span className="priority-dot normal-dot"></span>
              Normal
              <strong>
                {
                  patients.filter(
                    (p) => p.priority === "Normal"
                  ).length
                }
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="table-card">
        <div className="table-header">
          <h3>Recent Surgeries</h3>
          <span>{surgeries.length} Scheduled</span>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Surgery</th>
                <th>OR</th>
                <th>Time</th>
                <th>Priority</th>
              </tr>
            </thead>

            <tbody>
              {surgeries.map((surgery) => (
                <tr key={surgery.id}>
                  <td>{surgery.patient}</td>
                  <td>{surgery.surgery}</td>
                  <td>{surgery.or}</td>
                  <td>{surgery.time}</td>
                  <td>
                    <span className="status-badge success">
                      {surgery.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Reports;