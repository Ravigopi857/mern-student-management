function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "30px" }}>

      <h1
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        👤 My Profile
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        <h3>Name: {user?.name}</h3>
        <h3>Email: {user?.email}</h3>
        <h3>Role: Admin</h3>
      </div>

    </div>
  );
}

export default Profile;