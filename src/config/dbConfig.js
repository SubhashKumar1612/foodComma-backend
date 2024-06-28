const mongoose=require("mongoose")
const serverConfig=require("./serverConfig")

async function connectDB(){
    try{
        await mongoose.connect(serverConfig.DB_URL)
        console.log("connection successfull")
    }catch(error){
        console.log("there are some erroe ${error}"+error)
    }

}
module.exports=connectDB