
const dotenv=require("dotenv")
dotenv.config();


// here we are exporting all the env valriable
module.exports={
    PORT:process.env.PORT,
    DB_URL:process.env.DB_URL,
    JWT_SECRET:process.env.JWT_SECRET
}