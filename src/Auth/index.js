import React from "react";
import Login from "../Login";
import SignUp from "../SignUp";

import "./styles.css";

function Auth({ success }) {
  const [signUp, setSignUp] = React.useState(false);
  const handleLogin = user => {
    if (user.username !== "" && user.password !== "") {
      success(true);
    } else {
      alert("Please enter login details");
    }
  };
  const handleSignUp = user => {
    console.log(user);
  };
  return (
    <div className="Auth">
      {!signUp && (
        <>
          <button onClick={() => setSignUp(true)}> Sign up</button>
          <Login submit={handleLogin} />
        </>
      )}
      {signUp && (
        <>
          <button onClick={() => setSignUp(false)}>Back to Login</button>
          <SignUp submit={handleSignUp} />
        </>
      )}
    </div>
  );
}

export default Auth;
