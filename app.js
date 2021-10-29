// requiring needed modules
const express = require('express');
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
//         "_id": 0,
//         "Title": "Home",
//         "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur possimus aut numquam placeat, ad dolor quia ipsa, nostrum excepturi ex accusantium nulla illum iure obcaecati labore tempora, sed in soluta? Debitis consequuntur laborum laboriosam! Dignissimos eum atque unde aspernatur iure fugit repellat voluptatibus quisquam libero. Asperiores id odit eaque hic placeat, sint quod nam tenetur quo amet. Placeat dolorem temporibus sit fugiat voluptatem omnis soluta praesentium ducimus, nostrum adipisci ea nam veniam repellendus quidem porro doloremque facilis corrupti alias optio nisi. Explicabo quaerat odio mollitia eveniet incidunt dolore dolor, maiores commodi? Delectus, at! Dolore necessitatibus minima est qui voluptatum."
//     });
//     home.save();
// };
// base();

// function to create independent pages
function independent() {
    post.find((err,doc)=>{
        app.get("/${docs.Title}",(req,res)=>{
            res.render("independent",{d:doc});
        });
    });
}
independent();

app.post("/author", (req, res) => {
    let temp;
    // console.log(post.findOne().sort({ field: 'asc', _id: -1 }).limit(1).obj);

    // (Number) temp;
    const new_data = new post({
        _id: 0,
        Title: req.body.Title,
        description: req.body.description
    });
    console.log(new_data);
    new_data.save();
    independent();
    res.redirect("/");
});

// listening to port
app.listen(3000, () => {
    console.log("Server has started");
})