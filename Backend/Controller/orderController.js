import orderModal from "../Models/orderModal.js";
import Stripe from "stripe";
import userModel from "../Models/users.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const placeOrder = async(req,res) =>
{

    const newOrder = new orderModal({
        userId:req.body.userId,
        items:req.body.items,
        amount:req.body.amount,
        address:req.body.address,
    })

    await newOrder.save()
    await userModel.findByIdAndUpdate(req.body.userId , {cartData:{}})


}

export default placeOrder