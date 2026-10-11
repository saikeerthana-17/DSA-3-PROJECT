import { useState } from "react";

function ORScheduling({ surgeries, setSurgeries, patients, doctors }) {
  const [showForm, setShowForm] = useState(false);

  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [or, setOr] = useState("OR 1");
  const [surgery, setSurgery] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("Normal");

  const scheduleSurgery = () => {
    if (!patient || !doctor || !surgery || !time) {
      alert("Please fill all surgery details.");
      return;
    }

    const conflict = surgeries.some(
      (item) =>
        item.or === or &&
        item.time === time
    );

    if (conflict) {
      alert(
        `Scheduling Conflict! ${or} is already scheduled at ${time}.`
      );
      return;
    }

    const newSurgery = {
      id: Date.now(),
      patient,
      doctor,
      or,
      surgery,
      time,
      priority,
    };

    setSurgeries([...surgeries, newSurgery]);

    setPatient("");
    setDoctor("");
    setSurgery("");
    setTime("");
    setPriority("Normal");
    setShowForm(false);
  };

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h2>Operating Room Scheduling</h2>
          <p>
            Schedule surgeries and prevent OR conflicts.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowForm(!showForm)}
        >
          + Schedule Surgery
        </button>
      </div>

      {showForm && (
        <div className="form-panel">
          <h3>Schedule New Surgery</h3>

          <div className="form-grid">
            <div className="form-group">
              <label>Patient</label>

              <select
                value={patient}
                onChange={(e) =>
                  setPatient(e.target.value)
                }
              >
                <option value="">Select Patient</option>

                {patients.map((p) => (
                  <option key={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Doctor</label>

              <select
                value={doctor}
                onChange={(e) =>
                  setDoctor(e.target.value)
                }
              >
                <option value="">Select Doctor</option>

                {doctors
                  .filter((d) => d.available)
                  .map((d) => (
                    <option key={d.id}>
                      {d.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="form-group">
              <label>Operating Room</label>

              <select
                value={or}
                onChange={(e) =>
                  setOr(e.target.value)
                }
              >
                <option>OR 1</option>
                <option>OR 2</option>
                <option>OR 3</option>
                <option>OR 4</option>
                <option>OR 5</option>
              </select>
            </div>

            <div className="form-group">
              <label>Surgery</label>

              <input
                value={surgery}
                onChange={(e) =>
                  setSurgery(e.target.value)
                }
                placeholder="Enter surgery name"
              />
            </div>

            <div className="form-group">
              <label>Time</label>

              <input
                type="time"
                value={time}
                onChange={(e) =>
                  setTime(e.target.value)
                }
              />
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
            onClick={scheduleSurgery}
          >
            Schedule Surgery
          </button>
        </div>
      )}

      <div className="or-grid">
        {["OR 1", "OR 2", "OR 3", "OR 4"].map(
          (room) => {
            const roomSurgeries = surgeries.filter(
              (s) => s.or === room
            );

            return (
              <div className="or-card" key={room}>
                <div className="or-card-header">
                  <div className="or-icon">🏥</div>

                  <div>
                    <h3>{room}</h3>
                    <span>
                      {roomSurgeries.length > 0
                        ? "Scheduled"
                        : "Available"}
                    </span>
                  </div>

                  <div
                    className={
                      roomSurgeries.length > 0
                        ? "or-status busy"
                        : "or-status available"
                    }
                  ></div>
                </div>

                {roomSurgeries.length === 0 ? (
                  <div className="or-empty">
                    🟢 Room Available
                  </div>
                ) : (
                  roomSurgeries.map((item) => (
                    <div
                      className="or-surgery"
                      key={item.id}
                    >
                      <strong>{item.time}</strong>

                      <span>{item.surgery}</span>

                      <small>
                        {item.patient} • {item.doctor}
                      </small>
                    </div>
                  ))
                )}
              </div>
            );
          }
        )}
      </div>

      <div className="table-card">
        <div className="table-header">
          <h3>Complete Surgery Schedule</h3>
          <span>{surgeries.length} Surgeries</span>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Patient</th>
                <th>Surgery</th>
                <th>Doctor</th>
                <th>OR</th>
                <th>Time</th>
                <th>Priority</th>
              </tr>
            </thead>

            <tbody>
              {surgeries.map((item) => (
                <tr key={item.id}>
                  <td>{item.patient}</td>
                  <td>{item.surgery}</td>
                  <td>{item.doctor}</td>
                  <td>{item.or}</td>
                  <td>{item.time}</td>

                  <td>
                    <span className="status-badge success">
                      {item.priority}
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

export default ORScheduling;