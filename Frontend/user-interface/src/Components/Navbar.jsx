import React, { useContext } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { AuthContext } from "../ContextAPI/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import Modal from "./Modal";
import LoginModal from "../Login/LoginModal";
import Home from "../Login/Home";

export default function Navbar() {
  const ContextValue = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location?.pathname;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.clear();
    ContextValue.setAuthStates((prev) => {
      return {
        ...prev,
        isLogin: "0",
      };
    });
    navigate("/");
  };

  const buttonToggler = () => {
    if (localStorage.getItem("token")) {
      return (
        <>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      );
    } else {
      return <>
      <button className="rounded-full shadow-md bg-orange-400 text-white ml-6 w-32  p-2 hover:bg-orange-600" onClick={()=>{setOpenModal(true)}}>
                Login
              </button>
      </>;
    }
  };

  return (
    <>
    <Modal  open={openModal} setOpen={setOpenModal} >
      <Home/>
    </Modal>
      <div className=" h-20 w-full flex justify-between p-4">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="flex cursor-pointer justify-center items-center text-orange-500 text-4xl font-bold"
        >
          Foods
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex gap-4 ">
            {["Home", "Menu", "App", "About", "Extra"]?.map((items) => {
              return (
                <>
                  <Link
                    to={items === "Home" ? `/` : `/${items}`}
                    className={(function () {
                      if (items === "Home") {
                        if (activePath === `/`) {
                          return "hover:text-orange-600 hover:underline underline text-orange-600  hover:cursor-pointer font-sans ";
                        } else {
                          return "hover:text-orange-600 hover:underline hover:cursor-pointer font-sans ";
                        }
                      } else {
                        if (activePath === `/${items}`) {
                          return "hover:text-orange-600 hover:underline underline text-orange-600  hover:cursor-pointer font-sans ";
                        } else {
                          return "hover:text-orange-600 hover:underline hover:cursor-pointer font-sans ";
                        }
                      }
                    })()}
                  >
                    {items}
                  </Link>
                </>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          <div
            className="grid place-items-center text-gray-600"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <Badge badgeContent={4} color="success">
              <LocalMallIcon />
            </Badge>
          </div>
          <div className="text-gray-600">
            {buttonToggler()}
          </div>
        </div>
      </div>
    </>
  );
}
