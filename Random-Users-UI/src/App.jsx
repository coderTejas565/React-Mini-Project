import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./component/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchUsers() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://randomuser.me/api/?results=6"
      );
      const data = await response.json();

      setUsers(data.results);
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="app">
        <p className="status">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <p className="status error">{error}</p>
        <button onClick={fetchUsers}>Retry</button>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>User Directory</h1>

      <button onClick={fetchUsers}>
        Refresh Users
      </button>

      <div className="container">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;