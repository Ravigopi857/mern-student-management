import { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  const refreshStudents = () => setRefresh(!refresh);

  const pageTitle =
    activeTab === "dashboard"
      ? "Dashboard"
      : activeTab === "students"
      ? "Students"
      : activeTab === "add"
      ? "Add Student"
      : "Search Student";

  const openAddStudent = () => {
    setEditStudent(null);
    setActiveTab("add");
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div>
          <div className="brand">
            <span>🎓</span>
            <h2>Student Management System</h2>
          </div>

          <nav>
            <button className={activeTab === "dashboard" ? "active" : ""} onClick={() => setActiveTab("dashboard")}>
              🏠 Dashboard
            </button>
            <button className={activeTab === "students" ? "active" : ""} onClick={() => setActiveTab("students")}>
              👥 Students
            </button>
            <button className={activeTab === "add" ? "active" : ""} onClick={openAddStudent}>
              ➕ Add Student
            </button>
            <button className={activeTab === "search" ? "active" : ""} onClick={() => setActiveTab("search")}>
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
        <header className="blue-header">
          <div className="admin-box">👤 Admin⌄</div>
        </header>

        <section className="page-content">
          <div className="page-title">
            <h1>{pageTitle}</h1>
            <p>Welcome back, Admin! 👋</p>
          </div>

          <section className="stats">
            <div className="stat-card">
              <span className="purple">👥</span>
              <div>
                <h2>12</h2>
                <p>Total Students</p>
              </div>
            </div>

            <div className="stat-card">
              <span className="green">👤</span>
              <div>
                <h2>12</h2>
                <p>Active Students</p>
              </div>
            </div>

            <div className="stat-card">
              <span className="blue">🎓</span>
              <div>
                <h2>5</h2>
                <p>Courses</p>
              </div>
            </div>

            <div className="stat-card">
              <span className="pink">👩</span>
              <div>
                <h2>7</h2>
                <p>Female Students</p>
              </div>
            </div>
          </section>

          {activeTab === "add" && (
            <section className="content-card">
              <h2 className="section-title">{editStudent ? "Edit Student" : "Add Student"}</h2>
              <StudentForm
                refreshStudents={refreshStudents}
                editStudent={editStudent}
                setEditStudent={setEditStudent}
              />
            </section>
          )}

          {(activeTab === "dashboard" || activeTab === "students" || activeTab === "search") && (
            <section className="content-card">
              <div className="list-header">
                <h2>Students List</h2>
                <button className="add-btn" onClick={openAddStudent}>+ Add Student</button>
              </div>

              <StudentList
                refresh={refresh}
                setEditStudent={(student) => {
                  setEditStudent(student);
                  setActiveTab("add");
                }}
              />
            </section>
          )}

          <footer>© 2024 Student Management System. All rights reserved.</footer>
        </section>
      </main>
    </div>
  );
}

export default App;