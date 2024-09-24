import React, { useContext, useState } from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthContext";
import axios from "axios";

export default function LoginModal({setToggler,toggler}) {
  const navigate = useNavigate();

  const [states, setStates] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorState, setErrorState] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:8000/Auth/login", {
        password: states?.password,
        email: states?.email,
      });
      if (result.data.status === 200) {

        localStorage.setItem("token", result.data.token);

        navigate("/");
      } else {

      }
    } catch (error) {

      setErrorState(error?.response?.data?.message);
      console.log("error", error?.response?.data?.message);
    } finally {
    }
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          style={{ border: "1px solid #c5bfbf" }}
          className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full"
          placeholder="Email"
          value={states?.email}
          onChange={(e) => {
            setStates((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />

        <input
          type="text"
          name="password"
          style={{ border: "1px solid #c5bfbf" }}
          className="mt-5 p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full"
          placeholder="Password"
          value={states?.password}
          onChange={(e) => {
            setStates((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
        />

      
        <button
          type="submit"
          className="rounded-full shadow-md bg-orange-400 text-white mt-10 w-full p-3 hover:bg-orange-600"
        >
          Login
        </button>
        
      </form>
      <div className="text-orange-400  cursor-pointer hover:underline hover:text-blue-600 mt-5 text-sml" onClick={()=>{
          setToggler(true)
        }}> You don't have any account ? Please signup </div>

    </>
  );
}
