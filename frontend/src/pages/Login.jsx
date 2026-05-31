import { useState } from "react";
import axios from "axios";
import "../Login.css";

function Login({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://mern-student-management-2-9o4t.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      setIsLoggedIn(true);
      if (onLogin){
        onLogin()
      }

      localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
      window.location.href = "/dashboard";
      
    } catch (error) {
  console.log("FULL ERROR:", error);
  console.log("RESPONSE:", error.response);
  console.log("DATA:", error.response?.data);
  alert("❌ Invalid email or password.");
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
      Welcome Back, Admin
    </p>

    <form onSubmit={handleLogin}>

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

  <button className="login-btn" type="submit" onClick={handleLogin}>
    Login
  </button>
  

</form>

    <div className="bottom-text">
  New User?{" "}
  <span
    style={{ color: "#2563eb", cursor: "pointer" }}
    onClick={() => window.location.href = "/register"}
  >
    Register
  </span>
</div>
  </div>

</div>
);
}

export default Login;