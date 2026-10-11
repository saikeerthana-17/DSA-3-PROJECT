import { useState } from "react";

function PatientManagement({ patients, setPatients }) {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [priority, setPriority] = useState("Normal");

  const addPatient = () => {
    if (!name || !age || !department) {
      alert("Please fill all patient details.");
      return;
    }

    const newPatient = {
      id: Date.now(),
      patientId: `P${String(
        patients.length + 1
      ).padStart(3, "0")}`,
      name,
      age,
      department,
      priority,
      bed: "Not Assigned",
      status: "Waiting",
    };

    setPatients([...patients, newPatient]);

    setName("");
    setAge("");
    setDepartment("");
    setPriority("Normal");
    setShowForm(false);
  };

  const filteredPatients = patients.filter((patient) =>
    `${patient.name} ${patient.patientId} ${patient.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h2>Patient Management</h2>
          <p>
            Register and manage hospital patients.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Patient
        </button>
      </div>

      {showForm && (
        <div className="form-panel">
          <h3>Register New Patient</h3>

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
              <label>Age</label>

              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age"
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
                <option>Pediatrics</option>
              </select>
            </div>

            <div className="form-group">
              <label>Priority</label>

              <select
                value={priority}
                onChange={(e) =>
                  setPriority(e.target.value)
                }
              >
                <option>Emergency</option>
                <option>Critical</option>
                <option>Normal</option>
              </select>
            </div>
          </div>

          <button
            className="primary-button"
            onClick={addPatient}
          >
            Register Patient
          </button>
        </div>
      )}

      <div className="table-card">
        <div className="table-header">
          <h3>Registered Patients</h3>

          <div className="search-box">
            🔍
            <input
              placeholder="Search patients..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient</th>
                <th>Department</th>
                <th>Priority</th>
                <th>Bed</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredPatients.map((patient) => (
                <tr key={patient.id}>
                  <td>
                    <strong>{patient.patientId}</strong>
                  </td>

                  <td>{patient.name}</td>

                  <td>{patient.department}</td>

                  <td>
                    <span
                      className={
                        patient.priority === "Emergency"
                          ? "status-badge danger"
                          : patient.priority === "Critical"
                          ? "status-badge warning"
                          : "status-badge success"
                      }
                    >
                      {patient.priority}
                    </span>
                  </td>

                  <td>{patient.bed}</td>

                  <td>
                    <span className="status-badge success">
                      {patient.status}
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

export default PatientManagement;