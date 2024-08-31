import React from "react";
import Box from "../../Images/box.jpeg";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";

export default function MyOrder() {
  const navigate = useNavigate();
  return (
    <>
    <div className="border min-h-full"> <div className="min-h-72 overflow-auto">
        {[1]?.map((val) => {
          return (
            <>
              <div className="p-5">
                <h1 className="font-bold text-black text-2xl mb-4">
                  My Orders
                </h1>
                <div className="border  w-full grid grid-cols-6 items-center p-4  ">
                  <div className=" h-12">
                    <img src={Box} className="h-12 w-20" />
                  </div>
                  <div className="h-12 flex items-center ">
                    Rolls x 2 kathi Rolls x 3
                  </div>
                  <div className="h-12 flex items-center">Rs. 400</div>
                  <div className="h-12 flex items-center">Items : 2</div>
                  <div className="h-12 flex items-center">
                    {" "}
                    <div className="mx-4"><Badge color="secondary" variant="dot">
                      {/* <MailIcon /> */}
                    </Badge></div>
                    
                    Food Processing
                  </div>
                  <div className="h-12 flex items-center p-2 border grid place-items-center rounded-md">Track Order</div>
                  
                </div>
              </div>
            </>
          );
        })}
      </div></div>
     
    </>
  );
}
