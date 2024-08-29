import React, { useState } from "react";
import "./App.css";
import { CgProfile } from "react-icons/cg";
import { IoMailOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { useNavigate } from 'react-router-dom'; 

function App() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      setError("Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("Registration successful");
      navigate('/success'); 
    } catch (error) {
      console.error("Error during registration:", error.message);
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="header">
          <div className="text">Registration Form</div>
        </div>

        <div className="input-group">
          <div className="inputs">
            <CgProfile className="inputIcon" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputs">
            <IoMailOutline className="inputIcon" />
            <input
              type="email"
              name="email"
              placeholder="Email-Id"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputs">
            <MdLockOutline className="inputIcon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="eyeIcon" onClick={handleShowPassword}>
              {showPassword ? <IoMdEyeOff /> : <IoEye />}
            </span>
          </div>

          {error && <p className="error">{error}</p>} 
        </div>
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
