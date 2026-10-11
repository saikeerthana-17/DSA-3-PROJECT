import { useState } from "react";

function BedManagement({ beds, setBeds }) {
  const [search, setSearch] = useState("");

  const changeStatus = (id) => {
    setBeds(
      beds.map((bed) => {
        if (bed.id !== id) return bed;

        const nextStatus =
          bed.status === "Available"
            ? "Occupied"
            : bed.status === "Occupied"
            ? "Reserved"
            : "Available";

        return {
          ...bed,
          status: nextStatus,
        };
      })
    );
  };

  const filteredBeds = beds.filter((bed) =>
    `${bed.bedId} ${bed.ward} ${bed.status}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h2>Bed Management</h2>
          <p>
            Manage hospital beds and patient assignments.
          </p>
        </div>

        <div className="search-box">
          🔍
          <input
            placeholder="Search beds..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="mini-stats">
        <div>
          <span>🛏️</span>
          <strong>{beds.length}</strong>
          <p>Total Beds</p>
        </div>

        <div>
          <span>🟢</span>
          <strong>
            {beds.filter(
              (b) => b.status === "Available"
            ).length}
          </strong>
          <p>Available</p>
        </div>

        <div>
          <span>🔴</span>
          <strong>
            {beds.filter(
              (b) => b.status === "Occupied"
            ).length}
          </strong>
          <p>Occupied</p>
        </div>

        <div>
          <span>🟡</span>
          <strong>
            {beds.filter(
              (b) => b.status === "Reserved"
            ).length}
          </strong>
          <p>Reserved</p>
        </div>
      </div>

      <div className="table-card">
        <div className="table-header">
          <h3>Hospital Beds</h3>
          <span>{filteredBeds.length} beds</span>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Bed ID</th>
                <th>Ward</th>
                <th>Type</th>
                <th>Status</th>
                <th>Patient</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredBeds.map((bed) => (
                <tr key={bed.id}>
                  <td>
                    <strong>{bed.bedId}</strong>
                  </td>

                  <td>{bed.ward}</td>

                  <td>{bed.type}</td>

                  <td>
                    <span
                      className={
                        bed.status === "Available"
                          ? "status-badge success"
                          : bed.status === "Occupied"
                          ? "status-badge danger"
                          : "status-badge warning"
                      }
                    >
                      {bed.status}
                    </span>
                  </td>

                  <td>{bed.patient}</td>

                  <td>
                    <button
                      className="small-button"
                      onClick={() =>
                        changeStatus(bed.id)
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

export default BedManagement;