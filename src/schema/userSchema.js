const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"first name is required"],
        minlength:[5,"first name must be greater than 5 charchaater"],
        lowercase:true,
        trim:true,
        maxlength:[20,"must be less then 20 length"]
    },
    lastName:{
        type:String,
        required:[true,"first name is required"],
        minlength:[5,"first name must be greater than 5 charchaater"],
        lowercase:true,
        trim:true,
        maxlength:[20,"must be less then 20 length"]
    
    },
    mobileNumber:{
        type:String,
        trim:true,
        unique:[true,"phone number is already exist"],
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:[true,"email should be provided"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:true,
        minlength:[4,"must be greateer then 4"]
    }
},{
    timestamps:true
});

userSchema.pre('save', async function(){
    // here u can modify your user befor it is saved in mongodb
    const hashedPassword=await bcrypt.hash(this.password,10);
    this.password=hashedPassword;
})

const User=mongoose.model("User",userSchema)
module.exports=User;