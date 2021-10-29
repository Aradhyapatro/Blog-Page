const express = require('express');
const path = require('path');
var dir = __dirname;
dir = dir.substring(0, dir.length - 6);
const d = require(path.join(dir, "data.js"));
const router = express.Router();
const post = require(path.join(dir, "model/model.js"));
let arr = [];

function updating() {
    arr=[];
    post.find((err, doc) => {
        if (err) {
            console.log(err);
        } else {
            doc.forEach(element => {
                arr.push(element);
            });
        }
    });
    console.log("Done");
}
updating();

// get requests
router.get("/", (req, res) => {
    res.render('index',{d:arr[0],dd:arr});
});

router.get("/AboutUS", (req, res) => {
    updating();
    res.render("independent", { d: d.about });
});

router.get("/Home", (req, res) => {
    updating();
    res.render("independent", { d: d.home });
});

router.get("/ContactUs", (req, res) => {
    updating();
    res.render("independent", { d: d.contact });

});

router.get("/author", (req, res) => {
    updating();
    res.render("author");
});

module.exports = router;