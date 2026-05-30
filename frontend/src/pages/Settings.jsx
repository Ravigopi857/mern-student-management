import { useState, useEffect } from "react";

function Settings() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const handleSave = () => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    }

    alert("Settings Saved Successfully");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>⚙️ My Settings</h1>

      <h3>Theme</h3>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <h3 style={{ marginTop: "20px" }}>Language</h3>
      <select disabled>
        <option>English</option>
      </select>

      <br /><br />

      <button onClick={handleSave}>
        Save Settings
      </button>
    </div>
  );
}

export default Settings;