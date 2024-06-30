const express=require("express")
const bodyParser=require("body-parser")
const serverConfig=require('./config/serverConfig')
const connectDB=require("./config/dbConfig");
const User=require("./schema/userSchema");
const userRouter = require("./routes/userRoute");
const cartRouter = require("./routes/cartRoute");

const app=express();

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/users',userRouter)

app.use('/carts',cartRouter)

app.post('/ping',(req,res)=>{
    console.log(req.body)
    return res.json({message:'ping'})
})


app.listen(serverConfig.PORT,async()=>{
    await connectDB();
    console.log(`server started at ${serverConfig.PORT}......`)

    // const newUser=await User.create({
    //     email:"subahsh@gmail.com",
    //     password:"123345",
    //     firstName:"subhash",
    //     lastName:"kumar",
    //     mobileNumber:7808378125
    // })
    // console.log("create new user"+ newUser)
})

