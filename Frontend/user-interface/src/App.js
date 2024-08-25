import React, { useContext } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Login from "./Login";
import Secure from "./Secure";
import AuthContextProvider, { AuthContext } from "./ContextAPI/AuthContext";
import "./Tailwind/index.css"


function AppContent() {

  const ContextValue = useContext(AuthContext);
  console.log("Context Value:", ContextValue);
  const Routes = ContextValue?.authStates?.isLogin == 0 && !localStorage.getItem("token") ? <Login /> : <Secure />;

  return (
    <>
      {Routes}
    </>
  );
}

function App() {
  return (
    <AuthContextProvider>
      <AppContent />
    </AuthContextProvider>
  );
}



export default App;
