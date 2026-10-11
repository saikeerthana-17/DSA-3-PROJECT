import { useState } from "react";

function DoctorManagement({ doctors, setDoctors }) {
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  const addDoctor = () => {
    if (!name || !department) {
      alert("Please enter doctor name and department.");
      return;
    }

    const newDoctor = {
      id: Date.now(),
      name,
      department,
      available: true,
    };

    setDoctors([...doctors, newDoctor]);

    setName("");
    setDepartment("");
    setShowForm(false);
  };

  const toggleAvailability = (id) => {
    setDoctors(
      doctors.map((doctor) =>
        doctor.id === id
          ? {
              ...doctor,
              available: !doctor.available,
            }
          : doctor
      )
    );
  };

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h2>Doctors & Staff</h2>
          <p>Manage doctor availability and departments.</p>
        </div>

        <button
          className="primary-button"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Doctor
        </button>
      </div>

      {showForm && (
        <div className="form-panel">
          <h3>Add Doctor</h3>

          <div className="form-grid">
            <div className="form-group">
              <label>Doctor Name</label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter doctor name"
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
          </div>

          <button
            className="primary-button"
            onClick={addDoctor}
          >
            Add Doctor
          </button>
        </div>
      )}

      <div className="table-card">
        <div className="table-header">
          <h3>Doctor Availability</h3>
          <span>{doctors.length} Doctors</span>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Department</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id}>
                  <td>
                    <div className="table-person">
                      <div className="small-avatar">
                        👨‍⚕️
                      </div>

                      <strong>{doctor.name}</strong>
                    </div>
                  </td>

                  <td>{doctor.department}</td>

                  <td>
                    <span
                      className={
                        doctor.available
                          ? "status-badge success"
                          : "status-badge danger"
                      }
                    >
                      {doctor.available
                        ? "Available"
                        : "Busy"}
                    </span>
                  </td>

                  <td>
                    <button
                      className="small-button"
                      onClick={() =>
                        toggleAvailability(doctor.id)
                      }
                    >
                      Change Status
                    </button>
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

export default DoctorManagement;