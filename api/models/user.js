const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    username:{type:String,default:""},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    profilePic:{type:String,default:""},
    isAdmin:{type:Boolean,default:false},
}, {timestamp:true})

module.exports= new mongoose.model("User",userSchema);