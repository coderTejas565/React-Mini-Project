import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mode, setMode] = useState("login"); // login | register
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    role: "ADMIN",
  });

  // 🔐 Register
  async function registerUser() {
    try {
      setLoading(true);

const res = await fetch("https://api.freeapi.app/api/v1/users/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(form),
});

      const data = await res.json();
      alert(data.message || "Registered successfully");

      setMode("login");
    } catch (err) {
      alert("Register failed");
    } finally {
      setLoading(false);
    }
  }

  // 🔐 Login
  async function loginUser() {
    try {
      setLoading(true);

const res = await fetch("https://api.freeapi.app/api/v1/users/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: form.username,
    password: form.password,
  }),
});

      const data = await res.json();
      alert(data.message || "Login success");

      fetchCurrentUser();
    } catch (err) {
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  }

  // 🚪 Logout
  async function logoutUser() {
await fetch("https://api.freeapi.app/api/v1/users/logout", {
  method: "POST",
});

    setUser(null);
  }

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <div className="app">
      <h1>Auth System</h1>

      {!user ? (
        <div className="card">
          <h2>{mode === "login" ? "Login" : "Register"}</h2>

          {mode === "register" && (
            <input
              placeholder="Email"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          )}

          <input
            placeholder="Username"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button
            onClick={mode === "login" ? loginUser : registerUser}
            disabled={loading}
          >
            {loading ? "Loading..." : mode}
          </button>

          <p
            onClick={() =>
              setMode(mode === "login" ? "register" : "login")
            }
            style={{ cursor: "pointer", color: "blue" }}
          >
            Switch to {mode === "login" ? "Register" : "Login"}
          </p>
        </div>
      ) : (
        <div className="card">
          <h2>Welcome</h2>
          <p>{user.username}</p>
          <p>{user.email}</p>

          <button onClick={logoutUser}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;