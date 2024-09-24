const express=require ("express");
const app= new express();
const morgan=require ('morgan');
app.use(morgan('dev'));

app.use(express.static('public')); 

//created a movie router connection
const movieRoutes=require('./routes/movieRoutes');
app.use('/movies',movieRoutes); 

 //requiring env files(1) a third party module
 require('dotenv').config();
//going to access the .env file
const PORT =process.env.PORT; //const PORT can change the name .env.PORT here the port is the variable name that we given in the env file
//mongoose third party module enables to connrct to the dB locally and in atlas
require('./db/connection');//from node express we have connected to dB
//in order to do crud operation in dB we have to create a schema file

app.listen(PORT,()=>{//here we access the port no by the port variable
    console.log(`server running on port ${PORT}`);
})