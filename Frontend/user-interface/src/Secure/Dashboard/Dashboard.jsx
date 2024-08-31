import React from "react";
import Bg1 from "../../Images/Food-bg-1.jpg";
import DishesCard from "./DishesCard";

export default function Dashboard() {
  return (
    <>
      <div
        className="w-full h-auto rounded-xl overflow-hidden mt-10 shadow-xl "
        style={{
          backgroundImage: `url(${Bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex h-full justify-start items-stretch">
          <div className="w-3/4 h-full  p-4 flex flex-wrap justify-start items-center mx-5">
            <div className="mt-10 mx-auto">
              <h1 className="text-orange-400 font-bold  text-7xl ">
                Order your{" "}
              </h1>
              <h1 className="text-orange-400 font-bold  text-7xl">
                {" "}
                favourite food here..
              </h1>
              <p className="text-white mt-10 w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
                aut hic doloremque tempora dolores deserunt inventore soluta
                reiciendis dolorem veniam aliquid expedita ducimus laborum
                eveniet quas vitae quia quod itaque?
              </p>
              <button className="rounded-full shadow-md bg-orange-400 text-white mt-10 w-72 p-3 hover:bg-orange-600">
                View menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto w-full  mt-10">
        <div className="w-full">
          <h1 className="text-xl font-medium">Explore our menu</h1>
          <p className="w-1/2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            natus quaerat, cumque ipsam adipisci, vitae debitis repudiandae,
            atque repellat magnam ipsa facere odit? Debitis assumenda ab, quam
            optio eligendi delectus.
          </p>
        </div>

        <div className="w-full overflow-x-auto ">
          <div className="flex mt-10 flex-nowrap">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((dessert, index) => (
              <>
                <div>
                  <div
                    key={index}
                    style={{
                      border: "3px solid orange",
                      backgroundImage: `url(${Bg1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className=" h-24 w-24 mx-5 rounded-full flex-shrink-0 flex justify-center items-center "
                  >
                    cvcv
                  </div>
                  <h2>Foodes</h2>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="h-auto w-full  mt-10">
        <div className="w-full">
          <h1 className="text-xl font-medium">Top dishes near you</h1>
        </div>

        <div className="w-full mt-5 p-4">
          <div className="grid grid-cols-4 gap-6">
            {[1, 1, 1, 1, 1, 1, 1, 1, 1]?.map((dessert, index) => (
              <>
               <DishesCard/>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
