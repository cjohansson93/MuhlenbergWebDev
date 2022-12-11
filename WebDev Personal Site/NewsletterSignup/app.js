const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const app = express();
const port = 3000
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', function(req,res){
  res.sendFile(__dirname + '/signup.html');
});

app.use(express.static('public'));

app.post('/', function(req, res){
  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;

  var data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields:{
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }

  var jsonData = JSON.stringify(data);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });