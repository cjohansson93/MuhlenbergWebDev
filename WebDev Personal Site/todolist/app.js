const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
var items = [];
var day = "";

app.get("/", (req,res) => {
    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    day = today.toLocaleDateString("en-US", options);
    
    res.render('list', {kindOfDay: day, newListItem: items});
});

app.post("/", (req,res) =>{
    items.push(req.body.newItem);
    //res.render('list', {kindOfDay: day, newListItem: item});
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});