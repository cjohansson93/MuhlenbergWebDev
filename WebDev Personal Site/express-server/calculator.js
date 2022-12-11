const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result is is: " + result)
  //console.log(req.body);
  //res.sendFile(__dirname + './index.html')
})

app.get('/bmiCalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmiCalculator', function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);

  res.send("Your BMI is: " + bmi)
  //console.log(req.body);
  //res.sendFile(__dirname + './index.html')
})


//app.get('/contact', function(req, res){
//  res.send(' email me at <a href="${mailto:me@mail.com}"> me@mail.com </a>')
//})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})