function UserCard({ user }) {
  return (
    <div className="card">
      <img src={user.picture?.large} alt="user" />

      <h3>
        {user.name?.title} {user.name?.first} {user.name?.last}
      </h3>

      <p className="meta">
        {user.gender} • {user.nat}
      </p>

      <p className="email">{user.email}</p>

      <hr />

      <p>
        <b>Location:</b> {user.location?.city}, {user.location?.country}
      </p>
      <p>
        <b>Age:</b> {user.dob?.age} years
      </p>
      <p>
        <b>Mobile:</b> {user.phone}
      </p>
    </div>
  );
}

export default UserCard