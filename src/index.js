const express=require("express")
const bodyParser=require("body-parser")
const serverConfig=require('./config/serverConfig')
const connectDB=require("./config/dbConfig")
const app=express();

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended:true}))

app.post('/ping',(req,res)=>{
    console.log(req.body)
    return res.json({message:'ping'})
})


app.listen(serverConfig.PORT,async()=>{
    await connectDB();
    console.log(`server started at ${serverConfig.PORT}......`)
})
//ZqZbLRwZEoQMv3Pn   subhashkumarr1612