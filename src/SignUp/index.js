import React from "react";
import "./styles.css";

const SignUp = ({ submit }) => {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    country: "",
    gender: ""
  });
  const handleDropdown = e => {
    console.log(e);
  };
  return (
    <div className="wrapper">
      <div>Username</div>
      <input
        name="username"
        onChange={e => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        value={user.username}
        type="text"
      />
      <div>Password</div>
      <input
        name="password"
        onChange={e => setUser({ ...user, password: e.target.password })}
        placeholder="password"
        value={user.password}
        type="password"
      />
      <div>Email</div>
      <input
        name="email"
        placeholder="email"
        type="email"
        value={user.email}
        onChange={e => setUser({ ...user, email: e.target.email })}
      />
      <div>FirstName</div>
      <input
        name="firstname"
        placeholder="firstname"
        type="input"
        value={user.firstname}
        onChange={e => setUser({ ...user, firstname: e.target.value })}
      />
      <div>Gender</div>
      <span>
        <input
          name="gender"
          type="radio"
          value="male"
          checked={user.gender === "male"}
          onChange={() => setUser({ ...user, gender: "male" })}
        />{" "}
        Male
      </span>
      <span>
        <input
          name="gender"
          type="radio"
          value="female"
          checked={user.gender === "female"}
          onChange={() => setUser({ ...user, gender: "female" })}
        />
        Female
      </span>
      <div>Country</div>
      <select onChange={() => {}} value="india">
        <option selected={user.country === "india"} value="india">
          India
        </option>
        <option selected={user.country === "america"} value="america">
          America
        </option>
      </select>
      <div>
        <button onClick={() => submit(user)}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
