//Resourse :- user
//Users
const express=require("express");
const { createUser } = require("../controllers/UserController");
// we have to initialize a router objext to add router in a new file
// Router are used for segregating your routes in different modules
const userRouter=express.Router();

userRouter.post("/",createUser)// this is route reggistration
module.exports=userRouter// exporting the router from here

