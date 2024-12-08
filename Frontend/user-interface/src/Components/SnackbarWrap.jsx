import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { use } from "react";

function SnackbarWrap({ open, message, isAction, handleClose, severity }) {
  const navigate = useNavigate();

  const action = isAction ? (
    <>
      <Button
        color="secondary"
        size="small"
        onClick={() => {
          handleClose();
          navigate("/cart");
        }}>
        View
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  ) : (
    <></>
  );

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        handleClose();
      }, 6000);
    }
  }, [open]);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        // autoHideDuration={2000}
        severity={severity}
        open={open}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </>
  );
}

export default React.memo(SnackbarWrap);
