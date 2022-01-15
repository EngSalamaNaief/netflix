const express =require("express");
const mongoose =require("mongoose");
const dotenv =require("dotenv");
const app =express();
const auth=require("./routes/auth");
dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("database connected succeffuly")).catch(()=>console.log("database error"));

app.use(express.json());
app.use("/api/auth",auth);

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})