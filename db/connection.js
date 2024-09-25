const mongoose=require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log('Connection established');
}).catch((error)=>{
    console.log(error);
})//inside coonection string and db name :this connection string will change when we connect to atlas 
// method 1 mongoose.connect('mongodb://localhost:27017/movieDatabase') in stead we can give the link in env file to do that we have to require .env in connection.js 