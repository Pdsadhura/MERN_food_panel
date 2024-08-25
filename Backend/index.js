


const { json } = require("body-parser")
const expresse = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const authUserRouters = require("./Routes/authUserRouter")
const productRouters = require("./Routes/ProductRouters")
// const productRouters = require("./Routes/productRouters")


require("./config")
require("dotenv").config()


const app = expresse()
const PORT = process.env.PORT

app.listen(PORT,()=>{console.log(`connected , ${PORT}`)})
app.use(bodyParser.json())
app.use(cors())
app.use("/Auth",authUserRouters)
app.use("/Products",productRouters)


app.get("/pong",(req,res)=>{
    res.send("pong")
})

