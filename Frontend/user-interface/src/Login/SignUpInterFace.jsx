import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Navigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export default function SignUpInterFace({setOpen,setToggleButton}) {
  const [states, setStates] = useState({
    username: "",
    email: "",
    password: "",

  });

  const handleSignup = async (e) => {
    e.preventDefault();
    setOpen(true);
    try {
      const result = await axios.post("http://localhost:8000/Auth/signup", {
        name:states?.username,
        password: states?.password,
        email: states?.email,
      });
      if (result.data.status === 200) {
      swal("", result.data.message, "success");
      setToggleButton("")

      } else {
        // swal("Good job!", result.data.message, "success");
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setOpen(false);
    }
  };

  return (
    <>
     
        <form onSubmit={handleSignup}>
          <h1>Create Account</h1>
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
          <span>or use your email for registration</span>
          <TextField
          id="filled-basic"
          size="small"
          type="text"
            placeholder="User Name"
            value={states?.username}
            onChange={(e) => {
              setStates((prev) => {
                return { ...prev, username: e.target.value };
              });
            }}
          label="User Name"
          // variant="filled"
         
        />
          <TextField
          id="filled-basic"
          size="small"
          type="email"
          placeholder="Email"
          value={states?.email}
          onChange={(e) => {
            setStates((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
          label="Email"
          // variant="filled"
        
        />
        <TextField
          id="filled-basic"
           size="small"
           type="password"
            label="Password"
           placeholder="Password"
           value={states?.password}
           onChange={(e) => {
             setStates((prev) => {
               return { ...prev, password: e.target.value };
             });
           }}
          // variant="filled"s
      
        />
        
          <button>Sign Up</button>
        </form>
   
    </>
  );
}
