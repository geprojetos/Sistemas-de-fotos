var express = require('express')
    ,app = express()
    ,bodyParser = require('body-parser')
    ,routes = require('../app/routes')
    ,path =  require('path');

app.set('clientPath', path.join(__dirname, '../../project'));
console.log(app.get('clientPath'));
app.use(express.static(app.get('clientPath')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	next();
});

routes(app);

module.exports = app;