// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert, LinearProgress, Snackbar } from "@mui/material";

export default function ListItems() {

  const [list , setList] = useState([])
  const [open , setOpen] = useState(false);

  const [catchError , setCatchError] = useState({
    isLoad:false,
    message:"",
    type:""
   
  })

const fetchItems = async() =>{

  try {
    const result = await axios.get("http://localhost:8000/api/Foods/fetch-items");
    if (result.data.status === 200) {
      setList(result?.data?.allFooditems
      )
    } else {
    //   swal("Good job!", result.data.message, "success");
    }
  } catch (error) {
    console.log("error", error);
  } finally {
    // setOpen(false);
  }

}

const handleDeleteItem = async(itemId) =>{
  setOpen(true)
  try {
    const result = await axios.post("http://localhost:8000/api/Foods/delete-items",{
      id:itemId
    });
    if (result.data.status == 200) {
      setCatchError({message:result?.data
        ?.message , isLoad:true , type:"success"})
        fetchItems()
    } else {
     
      // swal("Good job!", result.data.message, "success");
    }
  } catch (error) {
    setCatchError({message:error?.response
      .data.message , isLoad:true , type:"error"})
  } finally {
    setOpen(false);
  }

}

const handleClose = () =>{
  setCatchError({
    isLoad:false,
    message:"",
    type:catchError?.type
  })
}

useEffect(()=>{
  fetchItems()

},[])

console.log("list",list)

  return (
    <>
     <Snackbar open={catchError?.isLoad} autoHideDuration={6000} 
 onClose={handleClose}
 anchorOrigin={{vertical : "top",horizontal : "center" }}

 >
        <Alert
          onClose={handleClose}
          severity={catchError?.type}
          variant="filled"
          sx={{ width: '100%' }}
        >
         {catchError?.message}
        </Alert>
      </Snackbar>
      {open &&  <LinearProgress />}
       <div className="border min-h-full"> <div className="min-h-72 overflow-auto">
       <h1 className="font-bold text-black text-2xl mb-4 p-12">
                 All Items List
                </h1>

                {list?.length > 0 ? <>  {list?.map((val) => {
          return (
            <>
              <div className="p-5">
              
                <div className="border  w-full grid grid-cols-6 items-center p-4  ">
                  <div className=" h-12">
                    <img src={`http://localhost:8000/Images/${val?.image}`} className="h-12 w-20" />
                  </div>
                  <div className="h-12 flex items-center ">
                   {val?.name}
                  </div>
                  <div className="h-12 flex items-center">{val?.category}</div>
                  <div className="h-12 flex items-center">{val?.description}</div>
                  <div className="h-12 flex items-center">
            
                
                  </div>
                  <div className="h-12 flex items-center p-2 border grid place-items-center rounded-md cursor-pointer"
                  onClick={()=>{
                    handleDeleteItem(val?._id)
                  }}
                  > <DeleteIcon/></div>
                  
                </div>
              </div>
            </>
          );
        })}</> : <> <div className="grid place-content-center">No Record Found !!</div> </>}
      
      </div></div>
    
    </>
  )
}
