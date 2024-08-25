import React, { useContext, useState } from "react";
import "./Style/index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../ContextAPI/AuthContext";
import SnackbarWrap from "../Components/SnackbarWrap";
import swal from "sweetalert";
import TextField from "@mui/material/TextField";

export default function LoginInterFace({ setOpen }) {
  const navigate = useNavigate();
  const ContextValue = useContext(AuthContext);

  const [states, setStates] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setOpen(true);
    try {
      const result = await axios.post("http://localhost:8000/Auth/login", {
        password: states?.password,
        email: states?.email,
      });
      if (result.data.status === 200) {
        // swal("", result.data.message, "success");
        localStorage.setItem("token", result.data.token);
        ContextValue.setAuthStates((prev) => {
          return {
            ...prev,
            isLogin: "1",
          };
        });
        navigate("/");
      } else {
        swal("Good job!", result.data.message, "success");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setOpen(false);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-google-plus-g"></i>
          </a>
          <a href="#" className="social">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span>or use your account</span>
        {/* <input
            type="text"
            placeholder="User Name"
            value={states?.username}
            onChange={(e) => {
              setStates((prev) => {
                return { ...prev, username: e.target.value };
              });
            }}
          /> */}
        <TextField
          id="filled-basic"
          size="small"
          type="email"
          placeholder="Email"
          label="Email"
          // variant="filled"
          value={states?.email}
          onChange={(e) => {
            setStates((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
        <TextField
          id="filled-basic"
           size="small"
          label="Password"
          // variant="filled"
          type="password"
          placeholder="Password"
          value={states?.password}
          onChange={(e) => {
            setStates((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
        />

        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}
