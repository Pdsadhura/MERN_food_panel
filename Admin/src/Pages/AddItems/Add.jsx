import { useRef, useState } from "react";
import axios from "axios"
import LinearProgress from '@mui/material/LinearProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Add() {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [states , setStates] = useState({
    name:"",
    desc:"",
    category:"",
    price:""
  })
  const [open , setOpen] = useState(false);
  const [catchError , setCatchError] = useState({
    isLoad:false,
    message:"",
    type:""
   
  })

  const handleUploadClick = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name); // Update the state with the file name
      setSelectedFile(file);
      // Handle the file upload logic here if needed
      console.log("Selected file:", file);
    }
  };

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setOpen(true)

    const formdata = new FormData();
    formdata.append("name",states?.name)
    formdata.append("description",states?.desc)
    formdata.append("price",states?.price)
    formdata.append("image",selectedFile)
    formdata.append("category",states?.category)


    try {
        const result = await axios.post("http://localhost:8000/api/Foods/add-items",formdata);
        console.log("98090jk" , result)
        if (result.data.status == 200) {
          setCatchError({message:result?.data
            ?.message , isLoad:true , type:"success"})
          setStates({  name:"",
            desc:"",
            category:"",
            price:""})
           setSelectedFileName("")
           setSelectedFile("")

        } else {
         
          // swal("Good job!", result.data.message, "success");
        }
      } catch (error) {
          setCatchError({message:error?.response
            .data.message , isLoad:true , type:"error"})
        // console.log("error", error);
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
     
    <form onSubmit={handleSubmit}>
    <div className="p-10 ">
        <h1 className="font-bold text-black text-3xl mb-4">Add Item Details</h1>
        <div className="grid gap-4 grid-cols-1">
          <div className="flex items-center">
            {" "}
            {/* Use flex for alignment */}
            <input
            required
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }} // Hide the file input
              accept="image/*" // Restrict to image files
              onChange={handleFileChange} // Handle file selection
            />
            <button
              onClick={handleUploadClick} // Trigger file input click
              style={{ border: "1px solid #c5bfbf" }}
              className="p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-[30%] mr-2" // Add margin to the right
            >
              Upload Product Image
            </button>
            {/* Display the selected file name */}
            {selectedFileName && (
              <>
                <span className="text-gray-700">
                  <img
                    className="h-10 w-10 mx-5"
                    src={URL.createObjectURL(selectedFile)}
                  />{" "}
                </span>
                <span className="text-gray-700">{selectedFileName}</span>
              </>
            )}
          </div>
          <div className="">
            <input
            required
              type="name"
              name="name"
              style={{ border: "1px solid #c5bfbf" }}
              className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full"
              placeholder="Product Name"
              value={states?.name}
              onChange={(e)=>{
                setStates((prev)=>({...prev , name:e.target.value}))
              }}
            />
          </div>
        </div>
        <div className="grid gap-4 grid-cols-1 mt-4">
          <div className="">
            <input
              type="description"
              name="description"
              style={{ border: "1px solid #c5bfbf" }}
              className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full"
              placeholder="Product Description"
              value={states?.desc}
              onChange={(e)=>{
                setStates((prev)=>({...prev , desc:e.target.value}))
              }}
            />
          </div>
          <div className="">
            <select
            required
              name="category"
              style={{ border: "1px solid #c5bfbf" }}
              className="p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full"
              value={states?.category}
              onChange={(e)=>{
                setStates((prev)=>({...prev , category:e.target.value}))
              }}
            >

              <option value="" disabled selected>
                Select Product Category
              </option>
              <option value="Spring Rolls">Spring Rolls</option>
              <option value="Burgers">Burgers</option>
              <option value="Salads">Salads</option>
              <option value="Desserts">Desserts</option>
              <option value="Pizza">Pizza</option>
            
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2 mt-4">
          <div className="">
            <input
            required
              type="Price"
              name="Price"
              style={{ border: "1px solid #c5bfbf" }}
              className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full"
              placeholder="Product Price"
              value={states?.price}
              onChange={(e)=>{
                setStates((prev)=>({...prev , price:e.target.value}))
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="rounded-full shadow-md bg-orange-400 text-white mt-10 w-72 p-3 hover:bg-orange-600"
        >
          Add Product
        </button>
      </div>
    </form>
     
    </>
  );
}
