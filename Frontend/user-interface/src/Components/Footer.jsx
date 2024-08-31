import React from "react";

export default function Footer() {
  return (
    <div className="h-full border bg-zinc-800 grid grid-cols-3 gap-2 p-5 rounded-tl-lg rounded-tr-lg ">
      <div className="h-full ">
        <header className="grid place-items-start p-4">
          <h1 className="font-bold text-orange-400 text-3xl mb-4">
            Delivery Information
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            eaque eius! Earum possimus tempore officia perferendis quis laborum
            cupiditate minus maxime totam, quidem iste. Deleniti dignissimos
            incidunt inventore pariatur voluptatem.
          </p>
          <div className="flex mt-5 ">
            <div
              className="h-7 w-7 rounded-full mx-2"
              style={{ border: "2px solid white" }}
            >
              .
            </div>
            <div
              className="h-7 w-7 rounded-full mx-2"
              style={{ border: "2px solid white" }}
            >
              .
            </div>
            <div
              className="h-7 w-7 rounded-full mx-2"
              style={{ border: "2px solid white" }}
            >
              .
            </div>
          </div>
        </header>
      </div>
      <div className="h-full ">
        <header className="grid place-items-start p-4">
          <h1 className="font-bold text-white text-3xl mb-4">Company</h1>
          <ul className="text-white cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </header>
      </div>
      <div className="h-full ">
        <header className="grid place-items-start p-4">
          <h1 className="font-bold text-white text-3xl mb-4">GET IN TOUCH</h1>
          <ul className="text-white cursor-pointer">
            <li>+91 8168336966</li>
            <li>Support@food.com</li>
          </ul>
        </header>
      </div>
    </div>
  );
}
