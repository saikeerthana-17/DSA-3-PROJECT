import { useState } from "react";
import "./App.css";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BedManagement from "./pages/BedManagement";
import PatientManagement from "./pages/PatientManagement";
import ORScheduling from "./pages/ORScheduling";
import DoctorManagement from "./pages/DoctorManagement";
import EmergencyCases from "./pages/EmergencyCases";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Notification from "./components/Notification";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [page, setPage] = useState("dashboard");

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [patients, setPatients] = useState([
    {
      id: 1,
      patientId: "P001",
      name: "Rahul Kumar",
      age: 45,
      department: "Cardiology",
      priority: "Critical",
      bed: "B-102",
      status: "Admitted",
    },
    {
      id: 2,
      patientId: "P002",
      name: "Priya Sharma",
      age: 32,
      department: "Neurology",
      priority: "Normal",
      bed: "B-205",
      status: "Waiting",
    },
    {
      id: 3,
      patientId: "P003",
      name: "Anil Reddy",
      age: 58,
      department: "Orthopedics",
      priority: "Emergency",
      bed: "ICU-01",
      status: "Admitted",
    },
  ]);

  const [beds, setBeds] = useState([
    {
      id: 1,
      bedId: "B-101",
      ward: "General Ward",
      type: "Normal",
      status: "Available",
      patient: "—",
    },
    {
      id: 2,
      bedId: "B-102",
      ward: "Cardiology",
      type: "Normal",
      status: "Occupied",
      patient: "Rahul Kumar",
    },
    {
      id: 3,
      bedId: "B-103",
      ward: "Neurology",
      type: "Normal",
      status: "Available",
      patient: "—",
    },
    {
      id: 4,
      bedId: "B-104",
      ward: "General Ward",
      type: "Normal",
      status: "Reserved",
      patient: "Priya Sharma",
    },
    {
      id: 5,
      bedId: "ICU-01",
      ward: "ICU",
      type: "ICU",
      status: "Occupied",
      patient: "Anil Reddy",
    },
    {
      id: 6,
      bedId: "B-105",
      ward: "Orthopedics",
      type: "Normal",
      status: "Available",
      patient: "—",
    },
  ]);

  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. Arjun Reddy",
      department: "Cardiology",
      available: true,
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      department: "Neurology",
      available: true,
    },
    {
      id: 3,
      name: "Dr. Rahul Verma",
      department: "Orthopedics",
      available: false,
    },
    {
      id: 4,
      name: "Dr. Ananya Rao",
      department: "General Surgery",
      available: true,
    },
  ]);

  const [surgeries, setSurgeries] = useState([
    {
      id: 1,
      patient: "Rahul Kumar",
      doctor: "Dr. Arjun Reddy",
      or: "OR 1",
      surgery: "Cardiac Procedure",
      time: "09:00",
      priority: "Critical",
    },
    {
      id: 2,
      patient: "Priya Sharma",
      doctor: "Dr. Priya Sharma",
      or: "OR 2",
      surgery: "Neurology Procedure",
      time: "11:00",
      priority: "Normal",
    },
    {
      id: 3,
      patient: "Anil Reddy",
      doctor: "Dr. Ananya Rao",
      or: "OR 3",
      surgery: "Emergency Surgery",
      time: "13:00",
      priority: "Emergency",
    },
  ]);

  const notifications = [
    {
      id: 1,
      title: "Emergency Case",
      message:
        "Patient Anil Reddy requires priority handling.",
      time: "Just now",
      type: "emergency",
    },
    {
      id: 2,
      title: "Bed Available",
      message: "Bed B-103 is now available.",
      time: "10 minutes ago",
      type: "success",
    },
    {
      id: 3,
      title: "Surgery Scheduled",
      message: "OR 1 scheduled for 09:00.",
      time: "30 minutes ago",
      type: "info",
    },
  ];

  const getPageTitle = () => {
    switch (page) {
      case "dashboard":
        return "Dashboard";

      case "patients":
        return "Patient Management";

      case "beds":
        return "Bed Management";

      case "or":
        return "Operating Room Scheduling";

      case "doctors":
        return "Doctors & Staff";

      case "emergency":
        return "Emergency Cases";

      case "reports":
        return "Reports & Analytics";

      case "settings":
        return "Settings";

      default:
        return "Dashboard";
    }
  };

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return (
          <Dashboard
            patients={patients}
            beds={beds}
            doctors={doctors}
            surgeries={surgeries}
            setPage={setPage}
          />
        );

      case "patients":
        return (
          <PatientManagement
            patients={patients}
            setPatients={setPatients}
          />
        );

      case "beds":
        return (
          <BedManagement
            beds={beds}
            setBeds={setBeds}
          />
        );

      case "or":
        return (
          <ORScheduling
            surgeries={surgeries}
            setSurgeries={setSurgeries}
            patients={patients}
            doctors={doctors}
          />
        );

      case "doctors":
        return (
          <DoctorManagement
            doctors={doctors}
            setDoctors={setDoctors}
          />
        );

      case "emergency":
        return (
          <EmergencyCases
            patients={patients}
            setPatients={setPatients}
          />
        );

      case "reports":
        return (
          <Reports
            patients={patients}
            beds={beds}
            surgeries={surgeries}
          />
        );

      case "settings":
        return <Settings />;

      default:
        return null;
    }
  };

  if (!loggedIn) {
    return (
      <Login
        onLogin={() => {
          setLoggedIn(true);
          setPage("dashboard");
        }}
      />
    );
  }

  return (
    <div className="app-layout">
      <Sidebar
        page={page}
        setPage={setPage}
        onLogout={() => {
          setLoggedIn(false);
          setPage("dashboard");
        }}
      />

      <div className="main-area">
        <Header
          title={getPageTitle()}
          notifications={notifications.length}
          onNotificationClick={() =>
            setShowNotifications(!showNotifications)
          }
        />

        {showNotifications && (
          <Notification
            notifications={notifications}
            onClose={() => setShowNotifications(false)}
          />
        )}

        {renderPage()}
      </div>
    </div>
  );
}

export default App;