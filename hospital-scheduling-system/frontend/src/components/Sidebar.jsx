function Sidebar({ page, setPage, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="hospital-logo">🏥</div>

        <div>
          <h2>Hospital</h2>
          <p>Scheduling System</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <p className="menu-title">MAIN MENU</p>

        <button
          className={page === "dashboard" ? "nav-item active" : "nav-item"}
          onClick={() => setPage("dashboard")}
        >
          📊 <span>Dashboard</span>
        </button>

        <button
          className={page === "patients" ? "nav-item active" : "nav-item"}
          onClick={() => setPage("patients")}
        >
          👤 <span>Patients</span>
        </button>

        <button
          className={page === "beds" ? "nav-item active" : "nav-item"}
          onClick={() => setPage("beds")}
        >
          🛏️ <span>Bed Management</span>
        </button>

        <button
          className={page === "or" ? "nav-item active" : "nav-item"}
          onClick={() => setPage("or")}
        >
          🏥 <span>OR Scheduling</span>
        </button>

        <button
          className={page === "doctors" ? "nav-item active" : "nav-item"}
          onClick={() => setPage("doctors")}
        >
          👨‍⚕️ <span>Doctors & Staff</span>
        </button>

        <button
          className={page === "emergency" ? "nav-item active" : "nav-item"}
          onClick={() => setPage("emergency")}
        >
          🚨 <span>Emergency Cases</span>
        </button>

        <p className="menu-title second-menu">ANALYTICS</p>

        <button
          className={page === "reports" ? "nav-item active" : "nav-item"}
          onClick={() => setPage("reports")}
        >
          📈 <span>Reports</span>
        </button>

        <button
          className={page === "settings" ? "nav-item active" : "nav-item"}
          onClick={() => setPage("settings")}
        >
          ⚙️ <span>Settings</span>
        </button>
      </nav>

      <div className="sidebar-bottom">
        <button className="logout-sidebar" onClick={onLogout}>
          🚪 <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;