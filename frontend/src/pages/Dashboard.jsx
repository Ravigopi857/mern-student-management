import { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
const user = JSON.parse(localStorage.getItem("user"));
function Dashboard() {
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#ffffff";

    setTimeout(() => {
      const mainArea = document.querySelector(".main-area");
      if (mainArea) mainArea.style.background = "#1e1e1e";
    }, 100);
  } else {
    document.body.style.backgroundColor = "#f6f8fc";
    document.body.style.color = "#000000";

    setTimeout(() => {
      const mainArea = document.querySelector(".main-area");
      if (mainArea) mainArea.style.background = "#f6f8fc";
    }, 100);
  }
}, []);
  const [refresh, setRefresh] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");
  const[students, setStudents]=useState([])
  const[showMenu,setShowMenu]=useState(false)

  const refreshStudents = () => {
    setRefresh(!refresh);
  };
  const API_URL =
  "https://mern-student-management-2-9o4t.onrender.com/api/students";

const fetchStudents = async () => {
  try {
    const res = await axios.get(API_URL);
    setStudents(res.data);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchStudents();
}, [refresh]);

const totalStudents = students.length;


  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div>
          <div className="brand">
            <h2>🎓 Student Management System</h2>
          </div>

          <nav>
            <button
              className={activeTab === "dashboard" ? "active" : ""}
              onClick={() => setActiveTab("dashboard")}
            >
              📊 Dashboard
            </button>

            <button
              className={activeTab === "students" ? "active" : ""}
              onClick={() => setActiveTab("students")}
            >
              👨‍🎓 Students
            </button>

            <button
              className={activeTab === "add" ? "active" : ""}
              onClick={() => setActiveTab("add")}
            >
              ➕ Add Student
            </button>

            <button
              className={activeTab === "search" ? "active" : ""}
              onClick={() => setActiveTab("search")}
            >
              🔍 Search Student
            </button>
          </nav>
        </div>

        <div className="sidebar-card">
          <div className="sidebar-icon">🎓</div>
          <h3>Student Management System</h3>
          <p>Manage student records efficiently</p>
        </div>
      </aside>

      <main className="main-area">
        <div className="blue-header">
          <div className="admin-box" style={{ position: "relative" }}>

  <div
  onClick={() => setShowMenu(!showMenu)}
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    background: "rgba(255,255,255,0.1)",
    padding: "8px 14px",
    borderRadius: "25px",
    color: "white",
    fontWeight: "600"
  }}
>
  <div
    style={{
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      background: "#2563eb",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    👤
  </div>

  <div>
  <div style={{ fontSize: "14px", fontWeight: "700" }}>
    {user?.name}
  </div>

  <div
    style={{
      fontSize: "11px",
      opacity: "0.8"
    }}
  >
    Administrator
  </div>
</div>

  <span>▼</span>
</div>

  {showMenu && (
    <div
      style={{
  position: "absolute",
  right: 0,
  top: "55px",
  background: "#ffffff",
  color: "#111827",
  width: "220px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  overflow: "hidden",
  zIndex: 999
}}
    >
      <div
  style={{
    padding: "15px",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
    fontWeight: "600"
  }}
  onClick={() => {
    setActiveTab("profile");
    setShowMenu(false);
  }}
>
  👤 Profile
</div>

<div
  style={{
    padding: "15px",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
    fontWeight: "600"
  }}
  onClick={() => {
    setActiveTab("settings");
    setShowMenu(false);
  }}
>
  ⚙️ Settings
</div>



      <div
  style={{
    padding: "15px",
    borderBottom: "1px solid #eee",
    cursor: "pointer",
    fontWeight: "600"
  }}
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
      >
        🚪 Logout
      </div>
    </div>
  )}

</div>
        </div>

        <div className="page-content">

          {(activeTab === "dashboard") && (
            <>
              <div className="page-title">
  <h1>Dashboard</h1>

  <p
    style={{
      fontSize: "15px",
      color: "#64748b",
      marginTop: "8px",
      lineHeight: "1.6"
    }}
  >
    Welcome Back, {user?.name} 👋
    <br />
    Manage student records efficiently and monitor student information from one place.
  </p>
</div>

              <div className="stats-grid">

  <div className="stat-card">
    <span>👥</span>
    <div>
      <h2>{students.length}</h2>
      <p>Total Students</p>
    </div>
  </div>

  <div className="stat-card">
    <span>🧑‍🎓</span>
    <div>
      <h2>{students.length}</h2>
      <p>Active Students</p>
    </div>
  </div>

  <div className="stat-card">
    <span className="blue">🎓</span>
    <div>
      <h2>100%</h2>
      <p>Academic Records</p>
    </div>
  </div>

  <div className="stat-card">
    <span className="pink">📚</span>
    <div>
      <h2>24/7</h2>
      <p>Course Management</p>
    </div>
  </div>

</div>

              <div className="content-card">

               
              <div
  className="list-header"
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
  }}
>
  <div>
    <h2>Students List</h2>

    <p
      style={{
        color: "#64748b",
        marginTop: "5px",
        fontSize: "14px"
      }}
    >
      View, search, edit and manage all student records.
    </p>
  </div>

  <button
    className="add-btn"
    style={{
      width: "170px",
      flexShrink: 0
    }}
    onClick={() => setActiveTab("add")}
  >
    + Add Student
  </button>
</div>
              

                <StudentList
  refresh={refresh}
  setEditStudent={(student) => {
    setEditStudent(student);
    setActiveTab("add");
  }}
/>
              </div>
            </>
          )}

          {activeTab === "students" && (
            <div className="content-card">

              <div className="list-header">

  <div>
    <h2>Students List</h2>

    <p
      style={{
        color: "#64748b",
        fontSize: "14px",
        marginTop: "5px"
      }}
    >
      Recently added student records overview.
    </p>
  </div>

 <button
  className="add-btn"
  style={{
    width: "170px",
    minWidth: "170px",
    marginLeft: "auto"
  }}
  onClick={() => setActiveTab("add")}
>
  + Add Student
</button>

</div>

              <StudentList
  refresh={refresh}
  setEditStudent={(student) => {
    setEditStudent(student);
    setActiveTab("add");
  }}
/>
            </div>
          )}

          {activeTab === "add" && (
            <div className="content-card">
              <StudentForm
                refreshStudents={refreshStudents}
                editStudent={editStudent}
                setEditStudent={setEditStudent}
              />
            </div>
          )}

          {activeTab === "search" && (
            <div className="content-card">
              <h2 style={{ marginBottom: "15px" }}>
                Search Student
              </h2>

              <StudentList
  refresh={refresh}
  setEditStudent={(student) => {
    setEditStudent(student);
    setActiveTab("add");
  }}
/>
            </div>
          )}


{activeTab === "profile" && (
  <div className="content-card">

    <h2
  style={{
    textAlign: "center",
    marginBottom: "20px"
  }}
>
  My Profile
</h2>

    <div
  style={{
    marginTop: "20px auto",
    background: "#fff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    textAlign: "center",
    maxWidth:"700px",
    margin:"20px auto"
  }}
>
  <div
    style={{
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      background: "#2563eb",
      color: "white",
      fontSize: "40px",
      margin: "0 auto 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    👤
  </div>

  <h2
  style={{
    marginTop: "15px",
    marginBottom: "8px",
    color: "#111827"
  }}
>
  {user?.name}
</h2>

  <p
    style={{
      color: "#64748b",
      marginBottom: "25px"
    }}
  >
    Administrator
  </p>

  <hr />

  <div style={{ marginTop: "20px" }}>
    <p><strong>Email:</strong> {user?.email}</p>

    <p><strong>Status:</strong> Active</p>

    <p><strong>Role:</strong> Administrator</p>
  </div>
</div>

  </div>
)}

{activeTab === "settings" && (
  <div className="content-card">

    <h2
  style={{
    textAlign: "center",
    marginBottom: "10px"
  }}
>
  ⚙️ Settings
</h2>

<p
  style={{
    textAlign: "center",
    color: "#64748b",
    marginBottom: "25px"
  }}
>
  Manage your application preferences
</p>

    <div style={{
    margin: "20px auto",
    maxWidth: "600px",
    background: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
  }}>

      <label
  style={{
    fontWeight: "600",
    color: "#374151"
  }}
>
  Theme Preference
</label>

      <select
        id="themeSelect"
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "8px",
          marginBottom: "20px"
        }}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <label
  style={{
    fontWeight: "600",
    color: "#374151"
  }}
>
  Language
</label>
      <select
        disabled
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "8px",
          marginBottom: "20px"
        }}
      >
        <option>English</option>
      </select>

      <button
  className="add-btn"
  style={{
  width: "100%",
  marginTop: "10px"
}}
  onClick={() => {
    const theme =
      document.getElementById("themeSelect").value;

    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#ffffff";

      document.querySelector(".main-area").style.background =
        "#1e1e1e";
    } else {
      document.body.style.backgroundColor = "#f6f8fc";
      document.body.style.color = "#000000";

      document.querySelector(".main-area").style.background =
        "#f6f8fc";
    }

    alert("Settings Saved Successfully");
  }}
>
  Save Settings
</button>

    </div>

  </div>
)}

        </div>
        <footer
  style={{
    textAlign: "center",
    padding: "20px",
    color: "#64748b",
    fontSize:"14px",
    marginTop:"20px",
    borderTop:"1px solid #e5e7eb"
  }}
>
  © 2026 Student Management System | MERN Stack Project
</footer>
      </main>
    </div>
  );
}

export default Dashboard;