import React, { useContext } from 'react'
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { AuthContext } from '../ContextAPI/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import IconButton from "@mui/material/IconButton";

export default function Navbar() {

  const ContextValue = useContext(AuthContext)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.clear()
    ContextValue.setAuthStates((prev) => {
      return {
        ...prev,
        isLogin: "0",
      };
    });
    navigate("/");
  };


  return (
    <>
    <div className=' h-20 w-full flex justify-between p-4' > 
        <div className='flex justify-center items-center text-orange-500 text-4xl font-bold'>Foods</div>
        <div className='flex justify-center items-center'>
          <ul className='flex gap-4 '>
            {["Home" , "Menu" , "App" , "About" , "Extra"]?.map((items)=>{return(<>
              <Link to={items==="Home" ? `/` : `/${items}`} className='hover:text-orange-600 hover:underline hover:cursor-pointer font-sans '>
            {items}
            </Link>
            </>)})}
    
         </ul>
        </div>
        <div className='flex justify-center items-center'>  <div>
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
          </div></div>
    </div>
    </>
  )
}
