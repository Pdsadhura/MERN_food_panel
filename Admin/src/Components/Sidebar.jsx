import { useLocation, useNavigate } from "react-router";

export default function Sidebar() {

    const navigate = useNavigate()
    const location = useLocation()

  return (
    <>
      <div className="w-[20%]  fixed h-full mt-[80px] border">
        <ul>
          {["Add Items", "List Items", "Orders"]?.map((val) => {
            return (
              <>
                <li style={{border:"1px solid black"}} className={location?.pathname?.replace(" ","") == `/${val?.replace(" ","")}` ?  "text-white  m-6  grid place-content-center p-5 text-slate-700 rounded-md bg-orange-500 cursor-pointer" :"text-white  m-6  grid place-content-center p-5 text-slate-700 rounded-md hover:bg-orange-500 cursor-pointer"} onClick={()=>navigate(`${val?.replace(" ","")}`)}>
                  {val}
                </li>
              </>
            );
          })}{" "}
        </ul>
      </div>
    </>
  );
}
