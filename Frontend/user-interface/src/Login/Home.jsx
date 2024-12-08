import React, { useState } from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import CircularProgress from "@mui/material/CircularProgress";
import { Backdrop } from "@mui/material";

export default function Home({ toggler, setToggler, openModal, setOpenModal, setErrorState, setOpenSnack, handleClose }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {toggler ? <SignUpModal setErrorState={setErrorState} setOpenSnack={setOpenSnack} setToggler={setToggler} toggler={toggler} open={open} setOpen={setOpen} setOpenModal={setOpenModal} openModal={openModal} /> : <LoginModal handleClose={handleClose} setErrorState={setErrorState} setOpenSnack={setOpenSnack} setToggler={setToggler} toggler={toggler} open={open} setOpen={setOpen} setOpenModal={setOpenModal} openModal={openModal} />}
    </>
  );
}
