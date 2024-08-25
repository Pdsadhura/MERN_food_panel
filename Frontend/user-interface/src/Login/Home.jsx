import React, { useState } from "react";
import "./Style/index.css";
import SignUpInterFace from "./SignUpInterFace";
import LoginInterFace from "./LoginInterFace";
import { useNavigate, useNavigation } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import Loader from "../Components/Loader";


export default function Home() {

  const [toggleButton, setToggleButton] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
    <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
>
 <Loader/>
</Backdrop>
<div className="Login-signup">
<div className={`container ${toggleButton}`} id="container">
      <div className="form-container sign-up-container">
      <SignUpInterFace open={open} setOpen={setOpen} toggleButton={toggleButton} setToggleButton={setToggleButton}  />
      </div>
      <div className="form-container sign-in-container">
      <LoginInterFace open={open} setOpen={setOpen}  />
      </div>
       
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => {
                  setToggleButton("");
                 
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => {
                  setToggleButton("right-panel-active");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer></footer>
</div>
     
    </>
  );
}
