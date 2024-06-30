const userRepository = require("../repositories/userRepository")
//const { create } = require("../schema/userSchema")
const UserService = require("../services/userservice")


async function createUser(req,res){
    console.log(" create user controller called")
    console.log(req.body)

    //todo register the user
    const userService=new UserService(new userRepository());
    //console.log(userService)
    
   try{
    const response=await userService.registerUser(req.body);

    return res.json({
        message:'successfully registered the user',
        success:true,
        data:response,
        error:{}
    })
   }catch(error){
        return res.json({
            message:error.reason,
            success:false,
            data:{},
            error:error
        })
   }
}
module.exports={
    createUser
}