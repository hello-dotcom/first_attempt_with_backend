const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "title is mandatory",
        minlength: 4,
        maxlength:150,
    },
    body : {
        type: String,
        required: "body is required",
        minlength: 4,
        maxlength: 1000,
    }
})

module.exports= mongoose.model("Post", postSchema);