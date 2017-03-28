const express = require('express');
const app = express();

const volleyball = require('volleyball');
app.use(volleyball);

const db = require('./models');
db.seed();

const path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const swig = require('swig');
swig.setDefaults('views', {cache:false});
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(require('./routes'));

module.exports = app;
