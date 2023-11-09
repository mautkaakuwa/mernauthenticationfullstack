const mongoose = require("mongoose");

const DB = "mongodb+srv://userMernBlog1:2nEpQQrEyCVXvgS1@clustermernblog1.9od1knm.mongodb.net/test";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connected successfully.")
}).catch((error)=>{
    console.log(`There is some problem in connecting Database : ${error}`)
})