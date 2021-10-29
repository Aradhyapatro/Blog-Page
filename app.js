// requiring needed modules
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();
const d = require(path.join(__dirname, "data.js"));
const post = require(path.join(__dirname, "/model/model.js"));

// setting up the environment
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

// get requests
const getindex = require('./routes/routes.js');
app.use("/", getindex);


// base data
// function base() {
//     const home = new post({
//         // "_id": 0,
//         "Title": "DAY3",
//         "description": "JS"
//     });
//     home.save();
// };
// base();

// function to create independent pages
function independent() {
    post.find((err,doc)=>{
        if(err){
            console.log(err);
        }else{
            doc.forEach(element => {
                app.get(`/${element.Title}`,(req,res)=>{
                    res.render('independent',{d:element});
                });
            });
        }
    });
}
independent();

app.post("/author", (req, res) => {
    const new_data = new post({
        Title: req.body.Title,
        description: req.body.description
    });
    new_data.save();
    console.log(new_data);
    independent();
    res.redirect("/");
});

// listening to port
app.listen(3000, () => {
    console.log("Server has started");
})