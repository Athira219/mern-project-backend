//import model
const authusers = require('../Model/authusersSchema')
//import jsonwebtoken
const jwt = require('jsonwebtoken')
//---------------------------register------------------------------//

exports.register = async (req, res) => {
    console.log('register');
    //extract data from request body - json() in app.js file json data into javascript object
    const { username, email, password, } = req.body
    try {
        const existingUser = await authusers.findOne({ email })
        if (existingUser) {
            res.status(406).json('Account already exist... Please Login ')
        } else {
            const newUser = new authusers({
                username: username,
                email,
                password
                
            })
            //save function in mongoose - to permanently store this data in mongodb
            await newUser.save()
            //response 
            res.status(200).json(newUser)

        }
    }
    catch (err) {
        res.status(401).json(`registration failed due to ${err}`)
    }
    
}
//-------------------------------login -----------------------------//

exports.login = async (req, res) => {
    console.log('login function');
    const { email, password } = req.body

    try {
        const existUser = await authusers.findOne({ email, password })
        console.log(existUser);
        if (existUser) {
            const token = jwt.sign({ userId: existUser._id }, 'jwtkey')
            res.status(200).json({
                existUser,
                token
            })

        } else {
            res.status(406).json('Invalid Email & Password')
        }

    }
    catch (err) {
        res.status(401).json(`${err}`)
    }

}