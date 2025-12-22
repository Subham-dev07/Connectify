import bcrypt from 'bcrypt';
import User from '../model/userSchema.js';

const authMiddleware = (req, res, next) => {
    
    if(req.body.type==="signup") {
        const newUser=signUp(req,res);
    }
    else if(req.body.type==="login"){
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
    const aya=await newUser.save();
    console.log(aya);
    
    return res.status(201).json({message:"User signed up successfully",user:newUser});
   } catch (error) {
    return res.status(500).json({message:"Server error during signup"});
   }
}
export default authMiddleware;