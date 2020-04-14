const express = require('express');
const app = express();
const morgan =require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
  })
);

app.use(cors());

require('./router/user')(app);

module.exports = app;