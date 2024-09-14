
import mongoose from "mongoose";


const foodItem = new mongoose.Schema({
  name:{type:String , required: true},
  description:{type:String , required: false},
  price:{type:Number , required: true},
  image:{type:String , required: true},
  category:{type:String , required: true},
})

const foodItemModel = mongoose.models.FoodItems || mongoose.model("FoodItems" , foodItem)


export default foodItemModel;

