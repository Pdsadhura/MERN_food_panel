


export default function Nav() {
//   const ContextValue = useContext(AuthContext);
 

  return (
    <>

      <div className="fixed z-10 h-20 w-full flex justify-between p-4  bg-orange-400">
        <div

          className="flex flex-col"
        >
          <div className="cursor-pointer justify-center items-center text-white text-2xl font-bold">Foods</div>
          
          <span>Admin panel</span>
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex gap-4 ">
          
          </ul>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          <div
            className="grid place-items-center text-gray-600"
          
          >
          
          </div>
          <div className="text-gray-600">
        <div className="h-[60px] w-[60px] rounded-full border "   style={{
          backgroundImage: `url("https://s.yimg.com/fz/api/res/1.2/yu_Qjf0E3v9xyoShV26_Ug--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0xNDQ7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0xNDQ-/https://s.yimg.com/zb/imgv1/f49fe3c0-1f0d-361c-a3cf-55648cfb5ebf/s_140x140")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>          </div>
        </div>
      </div>
    </>
  );
}
