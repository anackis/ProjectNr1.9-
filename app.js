//jshint esversion: 6


const express = require("express");
// body parser needed for form post data recive 
const bodyParser = require("body-parser");


const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

// we are saying file to use bodyparser because we need look for newItem 
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    res.render("list", {
        kindOfDay: day,
        newListItems: items
    });


    // const data = {
    //     items: [],
    // };
    // res.render('index', data);

});


app.post("/", function(req, res) {
    var item = req.body.newItem ;
    // console.log(item);
    items.push(item);
    res.redirect("/");
});




app.listen(3000, function() {
	console.log("Server has just started on port 3000");
});


