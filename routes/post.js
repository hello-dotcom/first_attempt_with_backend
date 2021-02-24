const express= require("express");

const postRequest = require("../controllers/post")

const validator = require("../validators");

const router= express.Router()

router.get('/',postRequest.getPosts);

router.post('/post',validator.createPostValidator, postRequest.createPost);

//exports.getPosts = (req,res)=> {res.end("Welcome to original game arena, \n welcome nikhil");}


module.exports= router;