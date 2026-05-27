import { useEffect, useState } from "react";
import axios from "axios";

function StudentList({ refresh, setEditStudent }) {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.log(error);
      alert("Error fetching students");
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      alert("Student deleted successfully");
      fetchStudents();
    } catch (error) {
      console.log(error);
      alert("Error deleting student");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [refresh]);

  const filteredStudents = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.course.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="student-list">
      <h2>All Students</h2>

      <input
        type="text"
        placeholder="Search by name, roll number, email, or course"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && <button onClick={() => setSearch("")}>Clear</button>}

      {filteredStudents.length === 0 ? (
        <p>No students found</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Course</th>
              <th>Year</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.rollNumber}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.course}</td>
                <td>{student.year}</td>
                <td>{student.address}</td>
                <td>
                  <button onClick={() => setEditStudent(student)}>Edit</button>
                  <button onClick={() => deleteStudent(student._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;