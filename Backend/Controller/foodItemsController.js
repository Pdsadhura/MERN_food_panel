import foodItemModel from "../Models/addFoodItems.js";
import fs from "fs"

const addFood = async (req, res) => {
  const { name, category, price, description } = req.body;
  console.log("Request Body:", req.body);
  console.log("File Info:", req.file); // Log file info for debugging

  // Check if file is present and has a valid format
  if (!req.file) {
    return res.status(403).json({
      message: "Please upload a valid image format",
      status: 403,
    });
  }

  try {
    // Create a new food item with provided data and uploaded file info
    const itemModel = new foodItemModel({
      name,
      category,
      price,
      description,
      image: req.file.filename,
    });

    // Save the food item in the database
    await itemModel.save();

    // Send success response if save is successful
    res.status(200).json({
      message: "File uploaded and item saved successfully",
      status: 200,
      file: req.file,
    });
  } catch (error) {
    // Handle any errors during saving to the database
    console.error("Error saving food item:", error.message);
    res.status(400).json({
      message:  error.message,
      status: 400,
      error: error.message,
    });
  }
};

const fetchFoodItems = async (req,res ) =>{

    try{
        const allItems = await foodItemModel.find({})
      
        res.status(200).json({
          allFooditems: allItems,
          status:200,
        });
    }catch(error){
        console.log("fetchItems" , error)
        res.status(500).json({
            message: "something wents wrong !",
            status:500,
          });
    }
   

}


const removeFoodItem = async (req , res)=>{

    try{
        const {id} = req.body
        const findItem = await foodItemModel.findById(id)

        // if(allItems?.length > 0){
          fs.unlink(`Uploads/${findItem.image}`, (error)=>{console.log("removeItem",error)})
          await foodItemModel.findByIdAndDelete(id)
        // }

        res.status(200).json({
          message: "Item removed successfully !!",
          status:200,
        });
        
    }catch(error){
        console.log("fetchItems" , error)
        res.status(500).json({
            message: "something wents wrong !",
            status:500,
          });
    }


}


export {addFood , fetchFoodItems , removeFoodItem}