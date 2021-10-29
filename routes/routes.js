const express = require('express');
const path = require('path');
var dir=__dirname;
dir=dir.substring(0,dir.length-6);
const d = require(path.join(dir, "data.js"));
const router=express.Router();

// get requests
router.get("/", (req, res) => {
    res.render("index", { d: d.data });
});

router.get("/AboutUS",(req,res)=>{
    res.render("independent", { d: d.about });
});

router.get("/ContactUs",(req,res)=>{
    res.render("independent", { d: d.contact });

});

router.get("/author",(req,res)=>{
    res.render("author");
});

module.exports=router;