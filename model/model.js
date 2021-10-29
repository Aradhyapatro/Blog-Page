const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todoDB');

const postSchema=new mongoose.Schema({
    _id:{type:Number,default:0},
    Title:String,
    description:{type:String,default:"Nothing"}
});

const post=mongoose.model("post",postSchema);

module.exports=post;