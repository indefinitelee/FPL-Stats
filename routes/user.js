const userRouter = require('express').Router()
const { createUser, authenticate } = require('../models/user.js')

userRouter.route('/signup')
  .post(createUser, (req, res, next) => res.json);

userRouter.route('/login')
  .post(authenticate, (req, res, next) => res.json);

module.exports = userRouter;
