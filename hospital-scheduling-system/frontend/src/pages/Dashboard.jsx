import StatCard from "../components/StatCard";

function Dashboard({
  patients,
  beds,
  doctors,
  surgeries,
  setPage,
}) {
  const availableBeds = beds.filter(
    (bed) => bed.status === "Available"
  ).length;

  const occupiedBeds = beds.filter(
    (bed) => bed.status === "Occupied"
  ).length;

  const emergencyCases = patients.filter(
    (patient) => patient.priority === "Emergency"
  ).length;

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h2>Dashboard Overview</h2>
          <p>
            Monitor hospital resources and scheduling activities.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setPage("patients")}
        >
          + Add Patient
        </button>
      </div>

      <section className="stats-grid">
        <StatCard
          icon="🛏️"
          title="Total Beds"
          value={beds.length}
          description="Hospital capacity"
          type="blue"
        />

        <StatCard
          icon="🟢"
          title="Available Beds"
          value={availableBeds}
          description="Ready for assignment"
          type="green"
        />

        <StatCard
          icon="🔴"
          title="Occupied Beds"
          value={occupiedBeds}
          description="Currently occupied"
          type="red"
        />

        <StatCard
          icon="🏥"
          title="Operating Rooms"
          value="8"
          description="Hospital OR capacity"
          type="purple"
        />

        <StatCard
          icon="👤"
          title="Patients"
          value={patients.length}
          description="Registered patients"
          type="orange"
        />

        <StatCard
          icon="🚨"
          title="Emergency Cases"
          value={emergencyCases}
          description="High priority cases"
          type="red"
        />
      </section>

      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <div className="panel-heading">
            <div>
              <h3>Bed Utilization</h3>
              <p>Current hospital bed usage</p>
            </div>

            <strong>78%</strong>
          </div>

          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: "78%" }}
            ></div>
          </div>

          <div className="progress-info">
            <span>75 Occupied</span>
            <span>45 Available</span>
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-heading">
            <div>
              <h3>OR Utilization</h3>
              <p>Operating room usage</p>
            </div>

            <strong>82%</strong>
          </div>

          <div className="progress-container">
            <div
              className="progress-bar purple"
              style={{ width: "82%" }}
            ></div>
          </div>

          <div className="progress-info">
            <span>6 Active</span>
            <span>2 Available</span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <div className="panel-heading">
            <div>
              <h3>Today's Schedule</h3>
              <p>Upcoming operating room activities</p>
            </div>

            <button
              className="text-button"
              onClick={() => setPage("or")}
            >
              View All
            </button>
          </div>

          <div className="schedule-list">
            {surgeries.slice(0, 4).map((surgery) => (
              <div
                className="dashboard-schedule"
                key={surgery.id}
              >
                <div className="schedule-time">
                  {surgery.time}
                </div>

                <div className="schedule-info">
                  <strong>{surgery.surgery}</strong>
                  <span>
                    {surgery.patient} • {surgery.or}
                  </span>
                </div>

                <span
                  className={`status-badge ${
                    surgery.priority === "Emergency"
                      ? "danger"
                      : surgery.priority === "Critical"
                      ? "warning"
                      : "success"
                  }`}
                >
                  {surgery.priority}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="panel-heading">
            <div>
              <h3>Doctor Availability</h3>
              <p>Current staff status</p>
            </div>

            <button
              className="text-button"
              onClick={() => setPage("doctors")}
            >
              View All
            </button>
          </div>

          <div className="doctor-mini-list">
            {doctors.slice(0, 4).map((doctor) => (
              <div className="doctor-mini" key={doctor.id}>
                <div className="doctor-avatar">
                  👨‍⚕️
                </div>

                <div>
                  <strong>{doctor.name}</strong>
                  <span>{doctor.department}</span>
                </div>

                <span
                  className={
                    doctor.available
                      ? "available-dot"
                      : "busy-dot"
                  }
                >
                  {doctor.available ? "Available" : "Busy"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h3>Quick Actions</h3>

        <div className="quick-action-grid">
          <button onClick={() => setPage("patients")}>
            👤
            <span>Add Patient</span>
          </button>

          <button onClick={() => setPage("beds")}>
            🛏️
            <span>Manage Beds</span>
          </button>

          <button onClick={() => setPage("or")}>
            🏥
            <span>Schedule Surgery</span>
          </button>

          <button onClick={() => setPage("emergency")}>
            🚨
            <span>Emergency Case</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;