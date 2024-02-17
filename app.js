// import dotenvenv
require('dotenv').config()

// import express
const expressModule = require('express')
//import cors
const corsModule = require('cors')

//import router
 const router = require('./Routing/connectionRouter')

//import connection.js
require('./DataBase/DbConnection')



//create server using express
const server = expressModule()

//use of cors by server
server.use(corsModule())

server.use(expressModule.json())

//server using the router
 server.use(router)

//customize port

const PORT = process.env.PORT || 7000;

/* run server  */
server.listen(PORT, () => {
    console.log(`server running successfully at ${PORT}`);
})