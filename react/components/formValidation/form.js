import React, { useState } from "react";

function SimpleLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert(`Login Successful!\nEmail: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label><br />
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <label>Password:</label><br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button type="submit">Login</button>
    </form>
  );
}

export default SimpleLoginForm;







///using useRef

import React, { useRef } from "react";

function SimpleLoginFormRef() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert(`Login Successful!\nEmail: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label><br />
      <input type="text" ref={emailRef} placeholder="Enter Email" />
      <br /><br />

      <label>Password:</label><br />
      <input type="password" ref={passwordRef} placeholder="Enter Password" />
      <br /><br />

      <button type="submit">Login</button>
    </form>
  );
}

export default SimpleLoginFormRef;
