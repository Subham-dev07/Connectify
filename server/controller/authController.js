import bcrypt from 'bcrypt';
import User from '../model/userSchema.js';

const authController = (req, res,next) => {
    if(req.body.type==="/signup") {
        return signUp(req,res);
    }
    else if(req.body.type==="/login"){
    } else {
        res.status(400).json({ message: "Invalid type provided." });
    }
}

const signUp=async(req,res)=>{
    const {name,mobile,email,password}=req.body;
   try {
    const userExists=await User.findOne({email:email});
    if(userExists) return res.status(409).json({message:"User already exists"});
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=new User({name,email,mobile,password:hashedPassword});
    await newUser.save();
    return res.status(201).json({message:"User signed up successfully",status:true});
   } catch (error) {
    return res.status(500).json(error.message);
   }
}
export default authController;
