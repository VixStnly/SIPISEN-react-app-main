
import Lottie from 'lottie-react';
import './login_style.css';
import Image from "../../assets/img/user.png"
import Aos from 'aos';
import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';
import Api from "../../api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Login = () => {
  document.title = "Login - NewsApp Administrator";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // Memindahkan pengecekan token ke dalam useEffect
    if (Cookies.get("token")) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const login = async (e) => {
    e.preventDefault();

    try {
      const response = await Api.post("/api/login", {
        email: email,
        password: password,
      });

      Cookies.set("token", response.data.token);
      Cookies.set("user", JSON.stringify(response.data.user));
      Cookies.set("permissions", JSON.stringify(response.data.permissions));

      toast.success("Login Successfully!", {
        position: "top-right",
        duration: 4000,

        
      });

      navigate("/dashboard");
    } catch (error) {
      setErrors(error.response.data);

    }
  };
  return (
  
  
      <body className="bodys">

        <div className="login-pagess">
          <div className="forms">
          {errors.message && (
                                            <div className="alert alert-danger">
                                                {errors.message}
                                            </div>
                                        )}
          <form onSubmit={login}>
          <h1 className='text-login'>LOGIN</h1>
          <div className="input-box">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" Email"
              required
            />
          </div>
          {errors.email && (
            <div className="alert alert-danger mt-2">{errors.email[0]}</div>
          )}

          <div className="input-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          {errors.password && (
            <div className="alert alert-danger mt-2">{errors.password[0]}</div>
          )}
          <button type="submit">login</button>
        </form>
          </div>
        </div>
        
      </body>
   
  );
};

export default Login;
