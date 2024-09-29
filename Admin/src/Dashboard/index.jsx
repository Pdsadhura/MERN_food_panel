import { Route, Routes } from "react-router";
import ListItems from "../Pages/List/ListItems";
import Orders from "../Pages/Orders/Orders";
import Add from "../Pages/AddItems/Add";


export default function index() {
  return (
    <>
   <div className="absolute mt-[80px]  border w-[80%]  h-[85vh] p-10">
   <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/AddItems" element={<Add />} />
          <Route path="/ListItems" element={<ListItems />} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
   </div>
   
    


    </>
  )
}
