import React from "react";
import "./styles.css";

const Login = ({ submit }) => {
  const [user, setUser] = React.useState({
    username: "",
    password: ""
  });
  return (
    <div className="wrapper">
      Login
      <div>
        <div>Username</div>
        <input
          type="text"
          value={user.username}
          name="username"
          onChange={e => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
        />
      </div>
      <div>
        <div>Password</div>
        <input
          type="password"
          value={user.password}
          name="password"
          placeholder="Password"
          onChange={e => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button onClick={() => submit(user)}>Login</button>
    </div>
  );
};

export default Login;
