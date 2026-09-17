const mongoose=require('mongoose');
const express = require("express");

const app = express();

app.use(express.json());


const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url).then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log("MongoDB connection error :",err);
})