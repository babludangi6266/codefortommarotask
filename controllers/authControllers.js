const jwt=require('jsonwebtoken');
require('dotenv').config();

const login=async (req,res)=>{
    const {email, password}=req.body;

    if(email!=='admin@codesfortomorrow.com' || password!=='Admin123!@#'){
        return res.status(401).json({message:"Invalid Credentials"});
    }
    const token=jwt.sign({email},process.env.JWT_SECRET,{expiresIn:'1h'});
        res.json({token});
};
module.exports={login};