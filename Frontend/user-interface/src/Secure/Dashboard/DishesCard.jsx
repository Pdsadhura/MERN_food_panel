import React, { useContext, useState } from "react";
import Rating from "@mui/material/Rating";
import Bg1 from "../../Images/Food-bg-1.jpg";
import { StoreContext } from "../../ContextAPI/StoreContext";

export default function DishesCard({dessert , index}) {

  const StoreValue = useContext(StoreContext)
  console.log("StoreContext",StoreValue)


  return (
    <>
      <div className="mx-3 mt-2 h-72 w-72 shadow-lg rounded-2xl overflow-hidden hover:drop-shadow-sm hover:shadow-orange-200">
        <div
          className="h-3/5 w-full border relative "
          style={{
            backgroundImage: `url(${Bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {" "}
          <div className={`h-8 ${StoreValue?.selectedItems[dessert?.id] > 0 ? "w-1/4 bg-orange-400" : "w-auto bg-none"}  rounded-3xl absolute bottom-2 shadow-md right-2 flex justify-around `}>
          {StoreValue?.selectedItems[dessert?.id] > 0 ? <>  <div className="grid place-items-center cursor-pointer font-bold">
            <button className="bg-white h-6 w-6 rounded-full" onClick={()=>{StoreValue?.remove_items(dessert?.id)}}>-</button>
            </div>{" "}
            <div className="flex justify-center items-center cursor-pointer text-white text-1xl">
              {StoreValue?.selectedItems[dessert?.id]}
            </div>{" "}</>:<></>}
          
            <div className="flex justify-center items-center cursor-pointer ">
              <button className="bg-white h-6 w-6 rounded-full flex justify-center" onClick={()=>{StoreValue?.add_items(dessert?.id)}}>+</button>
              
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between p-4 pt-0 pb-2">
            {" "}
            <div>{dessert?.name}</div>{" "}
            <div className="">
              {" "}
              <Rating  name="half-rating" readOnly  defaultValue={2.5} precision={0.5} />
            </div>{" "}
          </div>
          <div> <p className="text-gray-700 text-xs p-4 pt-0 text-wrap">{dessert?.description}</p></div>

          <div><h3 className="text-orange-400 font-bold p-4 pt-0 pb-2">Rs. {dessert?.price}</h3></div>
        </div>
      </div>
    </>
  );
}
