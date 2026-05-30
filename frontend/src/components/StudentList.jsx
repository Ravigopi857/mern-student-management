import { useEffect, useState } from "react";
import axios from "axios";

function StudentList({ refresh, setEditStudent }) {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const API_URL = "https://mern-student-management-c97t.onrender.com/api/students";

  const fetchStudents = async () => {
    try {
      const res = await axios.get(API_URL);
      setStudents(res.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching students");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [refresh]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      alert("Student deleted successfully");
      fetchStudents();
    } catch (error) {
      console.log(error);
      alert("Error deleting student");
    }
  };

  const filteredStudents = students.filter((student) =>
    `${student.name} ${student.email} ${student.course}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <div className="search-row">
        <input
          style={{
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #dbe3ef",
  fontSize: "14px"
}}
          type="text"
          placeholder="Search by name, email or course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="clear-btn" onClick={() => setSearch("")}>
          × Clear Search
        </button>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Roll No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
  {filteredStudents.length === 0 ? (
    <tr>
      <td
        colSpan="7"
        style={{
          textAlign: "center",
          padding: "20px",
          color: "#64748b",
          fontWeight: "600"
        }}
      >
        No Students Found
      </td>
    </tr>
  ) : (
    filteredStudents.map((student, index) => (
      <tr key={student._id}>
        <td>{index + 1}</td>
        <td>{student.rollNumber}</td>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{student.course}</td>
        <td>{student.year}</td>

        <td>
          <button
            className="action-btn edit-btn"
            onClick={() => {
              setEditStudent(student);
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }}
          >
            ✎
          </button>

          <button
            className="action-btn delete-btn"
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to delete this student?"
                )
              ) {
                handleDelete(student._id);
              }
            }}
          >
            🗑
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;