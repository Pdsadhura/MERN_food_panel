import React, { useState } from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";




export default function Home({toggler,setToggler}) {

  return (
    <>
    {toggler ?  <SignUpModal  setToggler={setToggler} toggler={toggler} /> :  <LoginModal setToggler={setToggler} toggler={toggler} />}
    </>
  );
}
