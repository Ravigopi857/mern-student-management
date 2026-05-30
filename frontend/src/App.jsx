import { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";


function App() {
  
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
  path="/dashboard"
  element={
    localStorage.getItem("token")
      ? <Dashboard />
      : <Login />
  }
/>
<Route
  path="/profile"
  element={
    localStorage.getItem("token")
      ? <Profile />
      : <Login />
  }
/>

<Route
  path="/settings"
  element={
    localStorage.getItem("token")
      ? <Settings />
      : <Login />
  }
/>
    </Routes>
  </BrowserRouter>
);
}

export default App;