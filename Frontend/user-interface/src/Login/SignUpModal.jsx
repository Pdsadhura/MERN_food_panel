import React, { useState } from "react";
import axios from "axios";

const SignUpModal = ({ setToggler, setErrorState, setOpenSnack, handleClose }) => {
  const [states, setStates] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:8000/Auth/signup", {
        name: states?.username,
        password: states?.password,
        email: states?.email,
      });
      if (result.data.status === 200) {
        setOpenSnack(true);
        setToggler(false);
        setErrorState("User created succeffully please login");
      } else {
      }
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  return (
    <>
      <form className="w-full" onSubmit={handleSignup}>
        <input
          type="text"
          name="user name"
          style={{ border: "1px solid #c5bfbf" }}
          className="mt-3 p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full"
          placeholder="User Name"
          value={states?.username}
          onChange={(e) => {
            setStates((prev) => {
              return { ...prev, username: e.target.value };
            });
          }}
        />

        <input
          type="text"
          name="email"
          style={{ border: "1px solid #c5bfbf" }}
          className="mt-3 p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full"
          placeholder="Email"
          value={states?.email}
          onChange={(e) => {
            setStates((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />

        <input
          name="email"
          style={{ border: "1px solid #c5bfbf" }}
          className="mt-3 p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full"
          type="password"
          placeholder="Password"
          value={states?.password}
          onChange={(e) => {
            setStates((prev) => {
              return { ...prev, password: e.target.value };
            });
          }}
        />

        <button type="submit" className="rounded-full shadow-md bg-orange-400 text-white mt-10 w-full p-3 hover:bg-orange-600">
          Sign up
        </button>
      </form>
      <div
        className="text-orange-400  cursor-pointer hover:underline hover:text-blue-600 mt-5 text-sml"
        onClick={() => {
          setToggler(false);
        }}>
        {" "}
        You already have an account ? please login{" "}
      </div>
    </>
  );
};

export default SignUpModal;
