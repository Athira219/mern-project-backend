//1) import express
const express = require('express')

const userController = require('../controller/authusers')

//2)create an object for router() class in the express module
const router = new express.Router()

//3)path to resolve the request

//register
router.post('/user/register',userController.register )

// //login
router.post('/user/login', userController.login)


//4) export router
module.exports = router