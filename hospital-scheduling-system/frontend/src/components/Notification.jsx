function Notification({ notifications, onClose }) {
  return (
    <div className="notification-panel">
      <div className="notification-header">
        <h3>Notifications</h3>

        <button onClick={onClose}>✕</button>
      </div>

      {notifications.length === 0 ? (
        <p className="no-notifications">
          No new notifications
        </p>
      ) : (
        notifications.map((notification) => (
          <div
            className={`notification-item ${notification.type}`}
            key={notification.id}
          >
            <div className="notification-icon">
              {notification.type === "emergency"
                ? "🚨"
                : notification.type === "success"
                ? "✅"
                : "🔔"}
            </div>

            <div>
              <strong>{notification.title}</strong>
              <p>{notification.message}</p>
              <small>{notification.time}</small>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Notification;