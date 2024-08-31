import React from "react";
import Bg1 from "../../Images/Food-bg-1.jpg";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function CartDetails() {
  const navigate = useNavigate()
  return (
    <>
      <div className="h-full w-full grid grid-cols-6 items-center p-6">
        <div className="text-xl font-bold">Items</div>
        <div className="text-xl font-bold">Title</div>
        <div className="text-xl font-bold">Price</div>
        <div className="text-xl font-bold">Quantity</div>
        <div className="text-xl font-bold">Total</div>
        <div className="text-xl font-bold">Remove</div>
      </div>

      <div className="h-72 overflow-auto">
        {[1, 1, 1, 1, 1, 1, 1, 1, 11]?.map((val) => {
          return (
            <>
              <div className="border  w-full grid grid-cols-6 items-center p-4  ">
                <div className=" h-12">
                  <img src={Bg1} className="h-12 w-20" />
                </div>
                <div className="h-12 flex items-center ">Item name</div>
                <div className="h-12 flex items-center">Rs. 400</div>
                <div className="h-12 flex items-center">3</div>
                <div className="h-12 flex items-center">1200</div>
                <div className="h-12 flex items-center mx-6">
                  <button><DeleteOutlineIcon/></button>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className=" mt-10">
        <div className="flex gap-4">
          <div className="h-auto border w-full p-10">
            <h1 className="font-bold text-black text-3xl">Cart Totals</h1>
            <div className="flex gap-4 ">
              <p className="h-auto text-4xl text-gray-500 font-bold w-full flex justify-start">
                <span>Sub Total :</span>
              </p>
              <p className="text-4xl text-gray-500 font-bold w-full flex justify-end">
                {" "}
                <span>Rs. 3000</span>
              </p>
            </div>
            <hr className="divide-y divide-slate-200"></hr>
            <div className="h-auto flex gap-4 ">
              <p className="text-4xl text-gray-500 font-bold w-full flex justify-start">
                <span>Delivery Fee :</span>
              </p>
              <p className="text-4xl text-gray-500 font-bold w-full flex justify-end">
                {" "}
                <span>Rs. 20</span>
              </p>
            </div>
            <hr className="divide-y divide-slate-200"></hr>
            <div className="h-auto flex gap-4 ">
              <p className="text-4xl text-black font-bold w-full flex justify-start">
                <span>Total :</span>
              </p>
              <p className="text-4xl text-black font-bold w-full flex justify-end">
                {" "}
                <span>Rs. 20</span>
              </p>
            </div>
            <button  className="rounded-full shadow-md bg-orange-400 text-white mt-1 w-72 p-3 hover:bg-orange-600"
            onClick={()=>{ navigate("/Delivery")}}
            >
                Proceed to Checkout
              </button>

          </div>
          <div className="h-auto border w-full">
            <div className="p-10">
              <p className="text-4xl text-gray-500 font-bold w-full ">
                <span>If you have a promo code, Enter it here</span>
              </p>
             
            
                <div className="h-9 ">
                  <input
                    className="bg-slate-200 h-full pl-2" style={{border:"1px solid gray"}}
                    placeholder="Enter Here"
                    type="text"
                  />
                  <button className="bg-black text-white w-auto px-4 h-full"  style={{border:"1px solid black"}}>
                    Submit
                  </button>
                </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
