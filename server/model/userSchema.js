import mongoose from "mongoose";
import validator from "validator";
const userSchema=new mongoose.Schema({
    name:{type:String,required:true, minlength:[2,"Name must be at least 2 characters long"]},
    email:{type:String,required:true,unique:true,validate:{validator:validator.isEmail,message:"Please enter a valid email"}},
    password:{type:String,required:true},
    mobile:{type:String,required:true},
})

const User=mongoose.model("User",userSchema);
export default User;
