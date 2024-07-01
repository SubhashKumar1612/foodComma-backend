//const userRepository = require("../repositories/userRepository")
const {registerUser}=require("../services/userservice");


async function createUser(req,res){
    console.log(" create user controller called")
    console.log(req.body)

    //todo register the user 
   try{
    const response=await registerUser(req.body);

    return res.json({
        message:'successfully registered the user',
        success:true,
        data:response,
        error:{}
    })
   }catch(error){
        return res.json({
            message:"usercontroller has an error",
            success:false,
            data:{},
            error:error
        })
   }
}
module.exports={
    createUser
}