import React, { useCallback, useContext, useEffect, useState } from "react";
import Bg1 from "../../Images/Food-bg-1.jpg";
import DishesCard from "./DishesCard";
import { StoreContext } from "../../ContextAPI/StoreContext";
import SnackbarWrap from "../../Components/SnackbarWrap";

export default function Dashboard() {
  const useStore = useContext(StoreContext);
  const [category, setCatogery] = useState(useStore?.food_Categories[0]);
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const getTotalItemCount = useCallback(() => {
    let values = Object.values(useStore?.selectedItems);
    return values.reduce((pre, curr) => pre + curr, 0);
  }, [useStore?.selectedItems]);

  return (
    <>
      <SnackbarWrap open={open} isAction={true} message={`${getTotalItemCount() > 1 ? `${getTotalItemCount()} Items` : `${getTotalItemCount()} Item`}  added successfully !!`} handleClose={handleClose} />
      <div
        className="w-full h-auto rounded-xl overflow-hidden mt-10 shadow-xl "
        style={{
          backgroundImage: `url(${Bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="flex h-full justify-start items-stretch">
          <div className="w-3/4 h-full  p-4 flex flex-wrap justify-start items-center mx-5">
            <div className="my-11 mx-auto">
              <h1 className="text-orange-400 font-bold  text-7xl ">Order your </h1>
              <h1 className="text-orange-400 font-bold  text-7xl"> favourite food here..</h1>
              <p className="text-white mt-10 w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, aut hic doloremque tempora dolores deserunt inventore soluta reiciendis dolorem veniam aliquid expedita ducimus laborum eveniet quas vitae quia quod itaque?</p>
              <a href="#menuitems">
                <button className="rounded-full shadow-md bg-orange-400 text-white mt-10 w-72 p-3 hover:bg-orange-600">View menu</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto w-full  mt-10">
        <div className="w-full">
          <h1 className="text-xl font-medium">Explore our menu</h1>
          <p className="w-1/2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil natus quaerat, cumque ipsam adipisci, vitae debitis repudiandae, atque repellat magnam ipsa facere odit? Debitis assumenda ab, quam optio eligendi delectus.</p>
        </div>

        <div className="w-full overflow-x-auto ">
          <div className="flex mt-10 flex-nowrap">
            {useStore?.food_Categories?.map((val, index) => (
              <>
                <div
                  onClick={() => {
                    setCatogery(val);
                  }}>
                  <div
                    key={`${index}-${category}`}
                    style={{
                      border: val === category ? "3px solid orange" : "",
                      backgroundImage: `url(${Bg1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className=" h-24 w-24 mx-5 rounded-full flex-shrink-0 flex justify-center items-center "></div>
                  <div className="flex justify-center items-center">
                    <h2>{val}</h2>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className="h-auto w-full  mt-10">
        <div className="w-full">
          <h1 id="menuitems" className="text-xl font-medium">
            Top dishes near you
          </h1>
        </div>

        <div className="w-full mt-5 p-4">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {useStore?.foodItems?.map((dessert, index) => (
              <>{category !== "All" ? category === dessert?.category && <DishesCard dessert={dessert} index={index} setOpen={setOpen} /> : <DishesCard dessert={dessert} index={index} setOpen={setOpen} />}</>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
