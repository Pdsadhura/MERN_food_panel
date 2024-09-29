
import Nav from "./Components/Nav";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Dashboard";

export default function App() {

  function AppContent() {

   
    const Routes = <Dashboard/>
  
    return (
      <>
        {Routes}
      </>
    );
  }

  return (
    <>
    <Nav/>
    <Sidebar/>
    <div className="ml-[20%] h-full">
    <AppContent/>
    </div>
   
    </>
  )
}
