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
          <div className="">
              <label className="grid place-content-start text-gray-700 text-sm font-bold my-1" htmlFor="confirmPassword">
              User Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id="confirmPassword"
               type="text"
                 placeholder="User Name"
                 value={states?.username}
                 onChange={(e) => {
                   setStates((prev) => {
                     return { ...prev, username: e.target.value };
                   });
                 }}
              />
            </div>

            <div className="">
              <label className="grid place-content-start text-gray-700 text-sm font-bold my-1" htmlFor="confirmPassword">
              Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id="confirmPassword"
               type="email"
                 placeholder="Email"
                 value={states?.email}
                 onChange={(e) => {
                   setStates((prev) => {
                     return { ...prev, email: e.target.value };
                   });
                 }}
              />
            </div>
            <div className="">
              <label className="grid place-content-start text-gray-700 text-sm font-bold my-1" htmlFor="confirmPassword">
              Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                // id="confirmPassword"
               type="password"
                 placeholder="Password"
                 value={states?.password}
                 onChange={(e) => {
                   setStates((prev) => {
                     return { ...prev, password: e.target.value };
                   });
                 }}
              />
            </div>
        
       
        
          <button className="mt-5">Sign Up</button>
        </form>
   
    </>
  );
}
