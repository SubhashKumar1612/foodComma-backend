//const { createUser } = require("../controllers/UserController");

class UserService{

    constructor(userRepository){
        // in the argument we will expect userRepository object
        this.userRepository=userRepository;
    }

    async registerUser(userDetails){
        console.log("hiting service layer")
        //it will create a brand new user in the db

        //1. we need to check if the user with this email and mobile number already exits or not
        const user=await this.userRepository.findUser({
            email:userDetails.email,
            mobileNumber:userDetails.mobileNumber
        });
       
        if(user){
            throw{ reason:`User with the given email and mobile number is already exist`,statusCode:400  }
        }

        // 2. if not then create the user in the database
        const newUser=await this.userRepository.createUser({
            email:userDetails.email,
            password:userDetails.password,
            firstName:userDetails.firstName,
            lastName:userDetails.lastName,
            mobileNumber:userDetails.mobileNumber
        });
        if(!newUser){
            throw { reaseon:'something went wrong, cannot created user',statusCode:500}
        }

        //3. return the details of created user
        return newUser;
    }
}
module.exports=UserService;