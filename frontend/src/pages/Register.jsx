import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Login.css";

function Register() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const handleRegister = async (e) => {
e.preventDefault();

try {
  await axios.post(
    "https://mern-student-management-2-9o4t.onrender.com/api/auth/register",
    {
      name,
      email,
      password,
    }
  );

  alert("Registration Successful");
  navigate("/login");
} catch (error) {
  console.log(error);
  console.log(error.response);

  alert(
    JSON.stringify(
      error.response?.data || error.message
    )
  );
}

};

return (
<div className="auth-container">

  <div className="auth-card">

    <div className="logo">🎓</div>

    <h2 className="title">
      Student Hub
    </h2>

    <p className="subtitle">
      Create Your Account
    </p>

    <form onSubmit={handleRegister}>

      <div className="input-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="login-btn" type="submit">
        Register
      </button>

    </form>

    <div className="bottom-text">
      Already have an account?{" "}
      <span
        style={{ color: "#2563eb", cursor: "pointer" }}
        onClick={() => navigate("/login")}
      >
        Login
      </span>
    </div>

  </div>

</div>

);
}

export default Register;