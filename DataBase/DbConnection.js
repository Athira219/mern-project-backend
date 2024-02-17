//import mongoose
const mongoose = require('mongoose')

//get the connection string

const dbConnection = process.env.mernDatabase
//  const connectionString = process.env.mernDatabase
console.log(dbConnection);

mongoose.connect(dbConnection).then(()=>{
   console.log('server connected successfully with mongoDB');
}).catch((err)=>{
   console.log(`something went wrong ERROR:${err}`);
})