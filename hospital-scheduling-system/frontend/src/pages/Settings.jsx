import { useState } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="page-content">
      <div className="page-heading">
        <div>
          <h2>Settings</h2>
          <p>Manage system preferences.</p>
        </div>
      </div>

      <div className="settings-card">
        <h3>System Settings</h3>

        <div className="setting-row">
          <div>
            <strong>🔔 Notifications</strong>
            <p>
              Receive alerts for emergency cases and
              scheduling updates.
            </p>
          </div>

          <button
            className={
              notifications
                ? "toggle active"
                : "toggle"
            }
            onClick={() =>
              setNotifications(!notifications)
            }
          >
            <span></span>
          </button>
        </div>

        <div className="setting-row">
          <div>
            <strong>🌙 Dark Mode</strong>
            <p>
              Change the appearance of the application.
            </p>
          </div>

          <button
            className={
              darkMode ? "toggle active" : "toggle"
            }
            onClick={() => setDarkMode(!darkMode)}
          >
            <span></span>
          </button>
        </div>

        <div className="setting-row">
          <div>
            <strong>🏥 Hospital Name</strong>
            <p>Hospital Scheduling System</p>
          </div>

          <button className="small-button">
            Edit
          </button>
        </div>

        <div className="setting-row">
          <div>
            <strong>👤 Administrator</strong>
            <p>admin@hospital.com</p>
          </div>

          <button className="small-button">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;