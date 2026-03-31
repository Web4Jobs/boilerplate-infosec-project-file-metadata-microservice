var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
var { registerTestRoutes } = require('w4j-test-utils');
registerTestRoutes(app);

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

/*
Your code Goes Here
*/




























// Listen on port set in environment variable or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
