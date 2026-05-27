import { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [editStudent, setEditStudent] = useState(null);

  const refreshStudents = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="app-container">
      <h1>Student Management System</h1>

      <StudentForm
        refreshStudents={refreshStudents}
        editStudent={editStudent}
        setEditStudent={setEditStudent}
      />

      <StudentList
        refresh={refresh}
        setEditStudent={setEditStudent}
      />
    </div>
  );
}

export default App;