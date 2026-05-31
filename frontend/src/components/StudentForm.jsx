import { useEffect, useState } from "react";
import axios from "axios";

function StudentForm({ refreshStudents, editStudent, setEditStudent }) {
const [student, setStudent] = useState({
name: "",
rollNumber: "",
email: "",
phone: "",
course: "",
year: "",
address: "",
});

useEffect(() => {
if (editStudent) {
setStudent({
name: editStudent.name || "",
rollNumber: editStudent.rollNumber || "",
email: editStudent.email || "",
phone: editStudent.phone || "",
course: editStudent.course || "",
year: editStudent.year || "",
address: editStudent.address || "",
});
}
}, [editStudent]);

const handleChange = (e) => {
setStudent({
...student,
[e.target.name]: e.target.value,
});
};

const clearForm = () => {
setStudent({
name: "",
rollNumber: "",
email: "",
phone: "",
course: "",
year: "",
address: "",
});

setEditStudent(null);

};

const handleSubmit = async (e) => {
e.preventDefault();

if (
  !student.name.trim() ||
  !student.rollNumber.trim() ||
  !student.email.trim() ||
  !student.phone.trim() ||
  !student.course.trim() ||
  !student.year.trim() ||
  !student.address.trim()
) {
  alert("⚠️ Please fill all fields.");
  return;
}

try {
  if (editStudent) {
    await axios.put(
      `https://mern-student-management-2-9o4t.onrender.com/api/students/${editStudent._id}`,
      student
    );

    alert("✅ Student updated successfully!");
  } else {
    await axios.post(
      "https://mern-student-management-2-9o4t.onrender.com/api/students",
      student
    );

    alert("✅ Student added successfully!");
  }

  clearForm();
  refreshStudents();
} catch (error) {
  console.error(error);

  const message =
    error?.response?.data?.message ||
    "Unable to save student. Please try again.";

  alert(`❌ ${message}`);
}

};

return (
<form onSubmit={handleSubmit}>
<h2 className="form-title">
{editStudent ? "✏️ Edit Student" : "➕ Add Student"}
</h2>

  <input
    name="name"
    placeholder="Name"
    value={student.name}
    onChange={handleChange}
  />

  <input
    name="rollNumber"
    placeholder="Roll Number"
    value={student.rollNumber}
    onChange={handleChange}
  />

  <input
    name="email"
    placeholder="Email"
    value={student.email}
    onChange={handleChange}
  />

  <input
    name="phone"
    placeholder="Phone"
    value={student.phone}
    onChange={handleChange}
  />

  <input
    name="course"
    placeholder="Course"
    value={student.course}
    onChange={handleChange}
  />

  <input
    name="year"
    placeholder="Year"
    value={student.year}
    onChange={handleChange}
  />

  <textarea
    name="address"
    placeholder="Address"
    value={student.address}
    onChange={handleChange}
    style={{
      gridColumn: "1 / span 2",
    }}
  />

  <button
    type="submit"
    style={{
      gridColumn: "1 / span 2",
      background: "#2563eb",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "600",
    }}
  >
    {editStudent ? "✏️ Update Student" : "➕ Add Student"}
  </button>

  {editStudent && (
    <button type="button" onClick={clearForm}>
      Cancel Edit
    </button>
  )}
</form>

);
}

export default StudentForm;