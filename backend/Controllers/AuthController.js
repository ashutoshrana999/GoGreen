const UserModel = require("../Models/Users");
const bcrypt =require('bcrypt');
const jwt=require('jsonwebtoken');

const signup=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const user=await UserModel.findOne({email});
        if(user){
            return res.status(409)
                .json({message:"User already exist,You can login",success:false});
        }
        const userModel=new UserModel({name,email,password});
        userModel.password=await bcrypt.hash(password,10);
        await userModel.save();
        res.status(201)
            .json({
                message:"Signup Successful",
                success:true
            })
    }catch(err){
        console.error("SIGNUP ERROR:", err);
         res.status(500)
            .json({
                message:"Internal sr error",
                success:false,
                error: err.message
            })
    }
}

const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user=await UserModel.findOne({email});
        if(!user){
            return res.status(403)
                .json({message:"Email or Password is wrong",success:false});
        }
        const isPassEqual=await bcrypt.compare(password,user.password);
        if(!isPassEqual){
            return res.status(403)
                .json({message:"Email or Password is wrong",success:false});
        
        }
        const jwtToken=jwt.sign(
            {email:user.email,_id:user._id},
            process.env.JWT_SECRET,
            { expiresIn:'24h'}
        )
        res.status(200)
            .json({
                message:"Login Successful",
                success:true,
                jwtToken,
                email,
                name:user.name
            })
    }catch(err){
        console.error("LOGIN ERROR:", err);
         res.status(500)
            .json({
                message:"Internal server error",
                success:false,
                error: err.message
            })
    }
}

const getProfile = async (req, res) => {
  try {
    const user = await UserModel
      .findById(req.user._id)
      .select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    console.error("PROFILE ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
      error: error.message,
    });
  }
};


module.exports={
    signup,login,getProfile
}