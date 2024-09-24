import React, { useState } from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";




export default function Home() {

  const [toggler , setToggler] = useState(false)

  return (
    <>
    {toggler ?  <SignUpModal  setToggler={setToggler} toggler={toggler} /> :  <LoginModal setToggler={setToggler} toggler={toggler} />}
  
  
     
    </>
  );
}
