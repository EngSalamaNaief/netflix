const express =require("express");
const mongoose =require("mongoose");
const dotenv =require("dotenv");
const app =express();
const auth=require("./routes/auth");
const user=require("./routes/user");
const movie=require("./routes/movie");


dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("database connected succeffuly")).catch(()=>console.log("database error"));

app.use(express.json());
app.use("/api/auth",auth);
app.use("/api/users",user);
app.use("/api/movies",movie);

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})