import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Bg1 from "../../Images/Food-bg-1.jpg";

export default function DishesCard() {

  const [itemCounter , setItemCounter] = useState(0)

  return (
    <>
      <div className="mx-3 mt-2 h-72 w-72 shadow-lg rounded-2xl overflow-hidden">
        <div
          className="h-3/5 w-full border relative "
          style={{
            backgroundImage: `url(${Bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
          <div className={`h-8 ${itemCounter > 0 ? "w-1/4 bg-orange-400" : "w-auto bg-none"}  rounded-3xl absolute bottom-2 shadow-md right-2 flex justify-around `}>
          {itemCounter > 0 ? <>  <div className="grid place-items-center cursor-pointer font-bold">
            <button className="bg-white h-6 w-6 rounded-full" onClick={()=>{setItemCounter((prev)=>(prev - 1))}}>-</button>
            </div>{" "}
            <div className="flex justify-center items-center cursor-pointer text-white text-1xl">
              {itemCounter}
            </div>{" "}</>:<></>}
          
            <div className="flex justify-center items-center cursor-pointer ">
              <button className="bg-white h-6 w-6 rounded-full flex justify-center" onClick={()=>{setItemCounter((prev)=>(prev + 1))}}>+</button>
              
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between p-4 pt-0 pb-2">
            {" "}
            <div>Item Name</div>{" "}
            <div className="">
              {" "}
              <Rating  name="half-rating" readOnly  defaultValue={2.5} precision={0.5} />
            </div>{" "}
          </div>
          <div> <p className="text-gray-700 text-xs p-4 pt-0 text-wrap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. olor sit amet, fddfdfdt</p></div>

          <div><h3 className="text-orange-400 font-bold p-4 pt-0 pb-2">Rs. 400</h3></div>
        </div>
      </div>
    </>
  );
}
