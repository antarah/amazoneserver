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
app.use(cors(
    {
		origin: function (origin, callback) {
			// allow requests with no origin
			// (like mobile apps or curl requests)
			if (!origin) return callback(null, true);
			if (allowedOrigins.indexOf(origin) === -1) {
				var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		},
	}
));
app.use(cookieParser(""));

app.use(router);
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