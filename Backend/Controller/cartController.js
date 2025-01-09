import userModel from "../Models/users.js"

const addItemsInCart = async (req, res) => {
    const { itemID } = req.body;
  
    try {
      const user_data = await userModel.findById(req.body.userID);
      if (!user_data) {
        return res.status(404).json({ message: "User not found", status: 404 });
      }

      const cart_data = user_data.cartData || {};
      if (!cart_data[itemID]) {
        cart_data[itemID] = 1;
      } else {
        cart_data[itemID] += 1;
      }
  
      await userModel.findByIdAndUpdate(req.body.userID, { cartData: cart_data });
  
      return res.status(200).json({ message: "Item added successfully!", status: 200 });
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).json({ message: "Something went wrong", status: 500 });
    }
  };
  

const removeItemsFromCart = async(req , res) =>{

  const {itemID} = req.body

    try{

      const user_data = await userModel.findById(req.body.userID);
      if (!user_data) {
        return res.status(404).json({ message: "User not found", status: 404 });
      }

      const cart_data = user_data.cartData || {};
      if (cart_data[itemID] > 0) {
        cart_data[itemID] -= 1;
      } 
  
      await userModel.findByIdAndUpdate(req.body.userID, { cartData: cart_data });
  
      return res.status(200).json({ message: "Item removed successfully!", status: 200 });


    }catch(error){

      console.log("Error:", error);
      return res.status(500).json({ message: "Something went wrong", status: 500 });


    }


}

const fetchCartData = async(req , res) =>{

try{

  const cart_data = await userModel.findById(req.body.userID)
  if (!cart_data) {
    return res.status(404).json({ message: "User not found", status: 404 });
  }
  const fetch_user_cart_data = cart_data.cartData
  res.status(200).json({ cartData: fetch_user_cart_data, status: 200 })

}catch(error){

  console.log("Error:", error);
      return res.status(500).json({ message: "Something went wrong", status: 500 });
}



}

export {addItemsInCart , removeItemsFromCart , fetchCartData}