const mongoose=require('mongoose');
//creating the schema
const movieSchema=mongoose.Schema({
    "movieName":String,
    "movieDirector":String,
    "movieDescription":String,
    "moviePrice":Number
})
//mapping the schema to te collection name for connection
const movieData=mongoose.model('movie',movieSchema)//collection name without s
module.exports=movieData;