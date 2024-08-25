import React from "react";
import Snackbar from "@mui/material/Snackbar";

export default function SnackbarWrap({open ,message}) {
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        open={open}
        //   onClose={handleClose}
        message={message}
        key={"top" + "center"}
      />
    </>
  );
}
