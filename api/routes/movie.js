const router =require("express").Router();
const Movie= require("../models/movie");
const auth = require("../middleware/auth");


//CREATE MOVIE
router.post("/create",auth,async(req,res)=>{
    
    try{
       if(req.user.isAdmin){
        const newMovie=new Movie(req.body)
        const movie=await newMovie.save();
        res.status(201).json({msg:"movie created succesfully"})
       }else{
         return res.status(404).json({msg:"you not allowed to create movie"});
       }
    }catch(err){
        res.status(404).json({msg:err})
    }
})
//UPDATE MOVIE
router.put("/update/:id",auth,async(req,res)=>{
    
    try{
       if(req.user.isAdmin){
        const movie=await Movie.findByIdAndUpdate(req.params.id,req.body);
        res.status(201).json({msg:"movie updated succesfully"})
       }else{
         return res.status(404).json({msg:"you not allowed to update movie"});
       }
    }catch(err){
        res.status(404).json({msg:err})
    }
})

//delete
router.delete("/delete/:id",auth,async(req,res)=>{
    
    try{
       if(req.user.isAdmin){
        await Movie.findByIdAndDelete(req.params.id);
        res.status(201).json({msg:"movie deleted succesfully"})
       }else{
         return res.status(404).json({msg:"you not allowed to delete movie"});
       }
    }catch(err){
        res.status(404).json({msg:err})
    }
})

//GET MOVIE
router.get("/getmovie/:id",async(req,res)=>{
    try{
       const movie= await Movie.findById(req.params.id);
        res.status(201).json({movie})
    }catch(err){
        res.status(404).json({msg:err})
    }
})
//GET ALL MOVIE
router.get("/allmovies",auth,async(req,res)=>{
    try{
       const movies= await Movie.find();
        res.status(201).json({movies})
    }catch(err){
        res.status(404).json({msg:err})
    }
})
//GET RANDUM MOVIES
router.get("/getrandum",auth,async(req,res)=>{
    const type=req.query.type;
    let movies;
    try{
      if(type==="series"){
        movies=await Movie.aggregate([
          {$match:{isSeries:true}},
          {$sample:{size:1}}
          ])
      }else{
          movies=await Movie.aggregate([
          {$match:{isSeries:false}},
          {$sample:{size:1}}
          ])
      }
      res.status(200).json({movies});
    }catch(err){
        res.status(404).json({msg:err})
    }
})

module.exports=router;
