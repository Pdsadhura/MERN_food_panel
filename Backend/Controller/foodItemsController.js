import foodItemModel from "../Models/addFoodItems.js";
import fs from "fs"

const addFood = async (req,res) =>{

    const {name,category,price,description} = req.body;
    console.log("Request Body: ", req.body);
    console.log("File Info: ", req.file); // This should have the file info if upload.single is working

    const itemModal = new foodItemModel({
        name,category,price,description,image:req.file.filename
    })

    await itemModal.save();
    res.status(200).json({
      message: "File uploaded successfully",
      status:200,
      file: req.file
    });

}

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
        fs.unlink(`Uploads/${findItem.image}`, (error)=>{console.log("removeItem",error)})
         await foodItemModel.findByIdAndDelete(id)

        



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