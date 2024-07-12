import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Importing icons

import "./SignInPage.css";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSignIn = () => {
    // Validate email format before sending the request
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    fetch("http://cabinwind.com/signin", { // fake API URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Sign-in failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Signin successful:", data);
      })
      .catch((error) => {
        console.error("Signin failed:");
      });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="signIn_main">
      <div className="signIn_div">
        <div className="signIn_right">
          <h2>
            Welcome to the <span className="signIn_topic">CABINWIND</span>
          </h2>

          <div class="horizontal-line"></div>

          <FiShoppingBag className="signIn_logo" />
          <h4>Good Evening!</h4>

          <div className="input_container">
            <FaEnvelope className="input_icon" />
            <input
              type="email"
              placeholder="Email"
              className={`signIn_input ${emailError && "error"}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
            />
          </div>
          {emailError && <p className="error_message">{emailError}</p>}

          <div className="input_container">
            <FaLock className="input_icon" />
            <input
              type="password"
              placeholder="Password"
              className="signIn_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="signIn_bttn" onClick={handleSignIn}>
            Sign in
          </button>
          <p>Don't have an account? Sign Up</p>
        </div>
      </div>
    </div>
  );
}
