const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profilePic:{type:String,default:""},
    isAdmin:{type:Boolean,default:false},
})

module.exports= new mongoose.model("User",userSchema);