'use strict'
require('dotenv').config({ silent: true});
const app         = express();
const bcrypt      = require('bcrypt.js');
const bodyParser  = require('body-parser');
const express     = require ('express');
const expressJWT  = require('express-jwt');
const jwt         = require('jsonwebtoken');
const logger      = require('morgan');
const path        = require('path');
const PORT        = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(express.statis(path.join(__dirname, 'dist')));
// app.use(expressJWT({secret: process.env.SECRET}).unless({path: ['/favicon.ico', '/user/login', '/user/signup']}));

app.use('/user', userRouter);







app.listen(PORT, () => console.warn(`It's a beautiful day for a footie match on port ${PORT}!`));
