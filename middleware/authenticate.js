const jwt=require('jsonwebtoken');
require('dotenv').config();

const authenticate=(req,res,next)=>{
    const token=req.header('Authorization').replace('Bearer ','');
    if(!token){
        return res.status(404).json({messgae:'Authenticate falied!'})
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }
    catch(error){
        res.status(401).json({messgae:'Invalid token!'});
    }
};

module.exports=authenticate;