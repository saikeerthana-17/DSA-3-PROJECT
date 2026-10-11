import { useState } from "react";

function EmergencyCases({ patients, setPatients }) {
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  const emergencyPatients = patients.filter(
    (patient) => patient.priority === "Emergency"
  );

  const addEmergency = () => {
    if (!name || !department) {
      alert("Please enter patient details.");
      return;
    }

    const patient = {
      id: Date.now(),
      patientId: `EMG-${patients.length + 1}`,
      name,
      age: "N/A",
      department,
      priority: "Emergency",
      bed: "Waiting",
      status: "Emergency",
    };

    setPatients([...patients, patient]);

    setName("");
    setDepartment("");
    setShowForm(false);
  };

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h2>🚨 Emergency Cases</h2>
          <p>
            Manage high-priority emergency patients.
          </p>
        </div>

        <button
          className="emergency-button"
          onClick={() => setShowForm(!showForm)}
        >
          🚨 Add Emergency Case
        </button>
      </div>

      {showForm && (
        <div className="emergency-form">
          <h3>Emergency Patient Registration</h3>

          <div className="form-grid">
            <div className="form-group">
              <label>Patient Name</label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter patient name"
              />
            </div>

            <div className="form-group">
              <label>Department</label>

              <select
                value={department}
                onChange={(e) =>
                  setDepartment(e.target.value)
                }
              >
                <option value="">Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>General Surgery</option>
              </select>
            </div>
          </div>

          <button
            className="emergency-button"
            onClick={addEmergency}
          >
            Add Emergency Patient
          </button>
        </div>
      )}

      <div className="emergency-alert">
        <div className="alert-icon">🚨</div>

        <div>
          <h3>Emergency Priority System</h3>

          <p>
            Emergency patients receive the highest scheduling
            priority and can be assigned to available resources.
          </p>
        </div>
      </div>

      <div className="emergency-grid">
        {emergencyPatients.length === 0 ? (
          <div className="empty-state">
            <div>✅</div>
            <h3>No Emergency Cases</h3>
            <p>
              There are currently no emergency patients.
            </p>
          </div>
        ) : (
          emergencyPatients.map((patient) => (
            <div
              className="emergency-card"
              key={patient.id}
            >
              <div className="emergency-card-top">
                <span className="emergency-label">
                  EMERGENCY
                </span>

                <span>#{patient.patientId}</span>
              </div>

              <h3>{patient.name}</h3>

              <p>
                Department: <strong>{patient.department}</strong>
              </p>

              <p>
                Status:{" "}
                <strong>{patient.status}</strong>
              </p>

              <button className="primary-button">
                ⚡ Auto Schedule
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default EmergencyCases;