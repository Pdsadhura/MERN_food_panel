import  { useRef, useState } from 'react'

export default function Add() {

    const fileInputRef = useRef(null);
    const [selectedFileName, setSelectedFileName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleUploadClick = () => {
        fileInputRef.current.click(); // Trigger the file input click
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFileName(file.name); // Update the state with the file name
            setSelectedFile(file)
            // Handle the file upload logic here if needed
            console.log('Selected file:', file);
        }
    };

  return (
    <>
          <div className="p-10 ">
            <h1 className="font-bold text-black text-3xl mb-4">Add Item Details</h1>
             <div className="grid gap-4 grid-cols-1">
             <div className="flex items-center"> {/* Use flex for alignment */}
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }} // Hide the file input
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
            {selectedFileName && (<>
                <span className="text-gray-700"><img className='h-10 w-10 mx-5' src={URL.createObjectURL(selectedFile)}/> </span>
                <span className="text-gray-700">{selectedFileName}</span>
            </>
                
            )}
        </div>
                <div className="">
                    <input type="text" name="last name" style={{border:"1px solid #c5bfbf"}} className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full" placeholder="Product Name" />
                </div>
              
             </div>
             <div className="grid gap-4 grid-cols-1 mt-4">
                <div className="">
                    <input type="email" name="email" style={{border:"1px solid #c5bfbf"}} className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full" placeholder="Product Description" />
                </div>
                <div className="">
    <select
        name="product-name"
        style={{ border: "1px solid #c5bfbf" }}
        className="p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full"
    >
        <option value="" disabled selected>
            Select Product Name
        </option>
        <option value="product1">Product 1</option>
        <option value="product2">Product 2</option>
        <option value="product3">Product 3</option>
        {/* Add more options as needed */}
    </select>
</div>
              
             </div>
             <div className="grid gap-4 grid-cols-2 mt-4">
                <div className="">
                    <input type="text" name="city" style={{border:"1px solid #c5bfbf"}} className=" p-2 focus:ring-1 focus:ring-orange-300 rounded-md w-full" placeholder="Product Price" />
                </div>
            
             
             </div>
         
             <button className="rounded-full shadow-md bg-orange-400 text-white mt-10 w-72 p-3 hover:bg-orange-600">
                Add Product
              </button>
          
            </div>

    </>
  )
}
