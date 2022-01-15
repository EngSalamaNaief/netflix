const router =require("express").Router();
const jwt =require("jsonwebtoken");
const bcrypt =require("bcryptjs");
const User = require("../models/user");


//REGISTER 
router.post("/register",async(req,res)=>{
    const salt = bcrypt.genSaltSync(10);
    try{

        const newUser = User({
            username:req.body.username,
            email:req.body.email,
            password:bcrypt.hashSync(req.body.password,salt)
        });
        const savedUser=await newUser.save();

        jwt.sign(
            {id:savedUser._id},
            "SECRET",
            {expiresIn:3600},
            (err,token)=>{
                if(err)
                 throw err;

                res.status(201).json({token,user:savedUser});
            }
        )
    }catch(err){
        res.status(404).json({msg:err})
    }
})


//REGISTER 
router.post("/login",async(req,res)=>{
    const salt = bcrypt.genSaltSync(10);
    try{

       const user=await User.findOne({email:req.body.email});
        !user&& res.status(404).json({msg:"not registered yet"});
        console.log(user)
        if(bcrypt.compareSync(req.body.password,user.password)){

        jwt.sign(
            {id:user._id},
            "SECRET",
            {expiresIn:3600},
            (err,token)=>{
                if(err)
                 throw err;
                res.status(201).json({token,user:user});
            }
        )
        }else{
            !user&& res.status(404).json({msg:"wrong password"});
        }
    }catch(err){
        res.status(404).json({msg:err})
    }
})
module.exports=router;