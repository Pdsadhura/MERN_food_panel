import React, { createContext, useState } from "react";

// Create the Auth Context
export const AuthContext = createContext();

// Create the AuthContext Provider component
export default function AuthContextProvider({ children }) {
  const [authStates, setAuthStates] = useState({
    isLogin: "0"
  });

  return (
    <AuthContext.Provider value={{ authStates, setAuthStates }}>
      {children}
    </AuthContext.Provider>
  );
}