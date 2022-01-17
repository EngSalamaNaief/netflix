const mongoose =require("mongoose");

const movieSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    desc:{type:String},
    imgTitle:{type:String},
    img:{type:String},
    imgSm:{type:String},
    trailer:{type:String},
    vedio:{type:String},
    limit:{type:Number},
    year:{type:String},
    genre:{type:String},
    isSeries:{type:Boolean,default:false},
})

module.exports= mongoose.model("Movie",movieSchema);