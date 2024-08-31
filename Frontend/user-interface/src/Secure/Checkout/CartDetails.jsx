import React from 'react'
import Bg1 from "../../Images/Food-bg-1.jpg";

export default function CartDetails() {
  return (
    <>
      <div className='h-full w-full grid grid-cols-6 items-center p-6'>
      <div className='text-xl font-bold'>Items
        </div>
        <div className='text-xl font-bold' >Title</div>
        <div className='text-xl font-bold'>Price</div>
        <div className='text-xl font-bold' >Quantity</div>
        <div className='text-xl font-bold' >Total</div>
        <div className='text-xl font-bold'>Remove</div>
      </div>
    
     {[1,1,1,1,1]?.map((val)=>{return(<>
    <div className='border h-full w-full grid grid-cols-6 items-center p-6'>
    <div className=' h-12' ><img src={Bg1} className='h-12 w-20'/>
        </div>
        <div   className='h-12' >Item name</div>
        <div  className='h-12' >Rs. 400</div>
        <div   className='h-12' >3</div>
        <div  className='h-12' >1200</div>
        <div  className='h-12' ><button>Cancle</button></div>
      
     
    </div>
    </>)})}
   
          
      
    </>
  )
}
