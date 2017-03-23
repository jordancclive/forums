const express = require('express');
const app = express();

const volleyball = require('volleyball');

const db = require('./models');
db.seed();

const path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

const swig = require('swig');
swig.setDefaults('views', {cache:false});
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(require('./routes'));

module.exports = app;
