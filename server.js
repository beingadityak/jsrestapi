var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.enable("trust proxy");
app.use(morgan('combined'));

// allow CORS -> https://enable-cors.org/server_expressjs.html
app.use('*', function(req, res, next) {
     res.header('Access-Control-Allow-Origin', "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
});

var api = require('./app/routes/api')(app,express);

app.use('/api',api);

app.get('*',function(req,res){
    res.status(200).json({
        'message' : 'Welcome to Comics Geek! A simple REST api for getting the comic strips.',
        'comics_available': ['Dilbert', 'Calvin & Hobbes', 'Garfield', 'Peanuts', 'Wizard of Id', 'The Adventures of Business Cat', 'Non Sequitur']
    })
});

app.listen(port, function(err){
    if(err)
    {
        console.log(err);
    }
    console.log('Server started @ PORT : ',port);
});