const express=require("express")
const bodyParser=require("body-parser")
const serverConfig=require('./config/serverConfig')
const connectDB=require("./config/dbConfig");
//const User=require("./schema/userSchema");


const userRouter = require("./routes/userRoute");
const cartRouter = require("./routes/cartRoute");
const authRouter = require("./routes/authRoute");


const app=express();

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended:true}))


// Routing middleware
// if your req route starts with /users then handle it using userRouter
app.use('/users', userRouter); // connects the router to the server
app.use('/carts', cartRouter);
app.use('/auth',authRouter)


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

