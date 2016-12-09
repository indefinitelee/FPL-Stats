'use strict'
require('dotenv').config({ silent: true});
const bcrypt      = require('bcrypt');
const bodyParser  = require('body-parser');
const express     = require ('express');
const app         = express();
const expressJWT  = require('express-jwt');
const jwt         = require('jsonwebtoken');
const logger      = require('morgan');
const path        = require('path');
const PORT        = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));
// app.use(expressJWT({secret: process.env.SECRET}).unless({path: ['/favicon.ico', '/user/login', '/user/signup']}));

const userRouter = require('./routes/user.js');
// const apiRouter = require('./routes/api.js');
app.get('/', (req, res) => {
 res.send({message: 'hi!'})
});

app.use('/user', userRouter);
// app.use('/api', apiRouter);




app.listen(PORT, () => console.warn(`It's a beautiful day for a footie match on port ${PORT}!`));
