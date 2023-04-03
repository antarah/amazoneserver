require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");

require("./db/conn");

const products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const cors = require('cors');

const router = require("./routes/router");

const port = process.env.PORT || 8005;


// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser(""));

app.use(router);

// Allow all domains
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
  })
 //app.get("/",(req,res)=>{
 //    res.send("your server is running");
// });

//for deployment

//if(process.env.NODE_ENV == "production"){
 //   app.use(express.static("client/build"));
//}
app.listen(port,()=>{
    console.log(`your server is running on port ${port} `);
});

DefaultData();