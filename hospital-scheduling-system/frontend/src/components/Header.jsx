function Header({ title, notifications, onNotificationClick }) {
  return (
    <header className="top-header">
      <div>
        <h1>{title}</h1>
        <p>Hospital Bed & Operating Room Management</p>
      </div>

      <div className="header-right">
        <button
          className="notification-button"
          onClick={onNotificationClick}
        >
          🔔
          {notifications > 0 && (
            <span className="notification-count">
              {notifications}
            </span>
          )}
        </button>

        <div className="user-profile">
          <div className="user-avatar">A</div>

          <div>
            <strong>Admin</strong>
            <span>Hospital Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;