const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:[true, "name must be required"],
        trim:true,
        lowercase:true,
        maxlength:[20,"name must not be greater than 20 word"]
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        minlength:5
    },
    productImage:{
        type:String
    },
    category:{
        type:String,
        enum:['veg','non-veg','drinks','sides'],
        default:'veg'
    },
    inStock:{
        type:Boolean,
        required:[true,"in stock status is required"],
        default:true
    }

},{
    timestamps:true
});
const product=mongoose.model("product",productSchema)
module.exports={
    product
}