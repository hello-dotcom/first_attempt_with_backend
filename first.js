
const express = require("express");
const bodyParser= require("body-parser");
const mongoose = require("mongoose");
const dotenv= require("dotenv");
const morgan= require("morgan");
const expressValidator= require("express-validator");

const app = express();
dotenv.config();


//dp
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }). then(()=>console.log("Db connected"))

mongoose.connection.on('error',err=>console.log(`error is ${err.message}`));

app.use(morgan("dev"));

app.use(bodyParser.json());

app.use(expressValidator());

const postRouter= require('./routes/post')

app.use("/",postRouter);

const port=process.env.PORT;
app.listen(port);