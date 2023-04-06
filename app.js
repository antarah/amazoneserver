require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("./db/conn");

const products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const cors = require('cors');

const router = require("./routes/router");

const port = process.env.PORT || 8005;


// middleware
app.use(express.json());

const corsOpts = {
	origin: '*',
  
	methods: [
	  'GET',
	  'POST',
	],
  
	allowedHeaders: [
	  'Content-Type',
	],
  };
  
  app.use(cors(corsOpts));
  app.use(cors());
  app.use(cookieParser(""));
  app.use(router);


 //app.get("/",(req,res)=>{
 //    res.send("your server is running");
// });

//for deployment

if(process.env.NODE_ENV == "production"){
app.use(express.static("client/build"));
}
app.listen(port,()=>{
    console.log(`your server is running on port ${port} `);
});

DefaultData();