const express = require('express');
const app = express();
const https = require('https');
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.post('/', function(req,res){
    const query = req.body.city;
    const apiKey = "9aeb7a27539b77d1640fe2065e2bcf75";
    const units = "imperial";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
    
    https.get(url, (response) => {
        response.on('data', (data) =>{
            const weatherData = JSON.parse(data);
            console.log(weatherData);

            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            res.write("<h1>The temperature at " + weatherData.name + " is " + temp + " degrees Fahrenheit.");
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write('<h1><img src="http://openweathermap.org/img/wn/' + icon + '.png"></h1>');
            res.send();
        });
    });
});

app.listen(port, function(){
    console.log('App listening on port' + port);
});

