import React from "react";
import Bg1 from "../../Images/Food-bg-1.jpg";
import { useNavigate } from "react-router-dom";

export default function DeliveryInfo() {
    const navigate = useNavigate()
  return (
    <>

      <div className=" mt-10">
        <div className="flex gap-4 ">
      
          <div className="h-auto border w-full">
            <div className="p-10">
            <h1 className="font-bold text-black text-3xl mb-4">Delivery Information</h1>
             <div className="grid gap-4 grid-cols-2">
                <div className="">
                    <input type="text" name="first name" style={{border:"1px solid #c5bfbf"}} className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full" placeholder="First Name" />
                </div>
                <div className="">
                    <input type="text" name="last name" style={{border:"1px solid #c5bfbf"}} className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full" placeholder="Last Name" />
                </div>
              
             </div>
             <div className="grid gap-4 grid-cols-1 mt-4">
                <div className="">
                    <input type="email" name="email" style={{border:"1px solid #c5bfbf"}} className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full" placeholder="Email Address" />
                </div>
                <div className="">
                    <input type="text" name="street" style={{border:"1px solid #c5bfbf"}} className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full" placeholder="Street" />
                </div>
              
             </div>
             <div className="grid gap-4 grid-cols-2 mt-4">
                <div className="">
                    <input type="text" name="city" style={{border:"1px solid #c5bfbf"}} className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full" placeholder="City" />
                </div>
                <div className="">
                    <input type="text" name="state" style={{border:"1px solid #c5bfbf"}} className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full" placeholder="State" />
                </div>
                <div className="">
                    <input type="text" name="zipcode" style={{border:"1px solid #c5bfbf"}} className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full" placeholder="Zip Code" />
                </div>
                <div className="">
                    <input type="text" name="country" style={{border:"1px solid #c5bfbf"}} className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full" placeholder="Country" />
                </div>
              
             </div>
             <div className="grid gap-4 grid-cols-1 mt-4">
                <div className="">
                    <input type="text" name="phoneno" style={{border:"1px solid #c5bfbf"}} className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full" placeholder="Phone no." />
                </div>
              
              
             </div>
            </div>
          </div>

          <div className="h-auto border w-8/12 p-10">
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
            <button className="rounded-full shadow-md bg-orange-400 text-white mt-1 w-72 p-3 hover:bg-orange-600" >
                Proceed to Checkout
              </button>

          </div>
        </div>
      </div>
    </>
  );
}
