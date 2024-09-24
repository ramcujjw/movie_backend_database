const express=require ('express');
const router=express.Router();

//requirng the schema file to do crud operation (11:36)
const movieModel=require('../model/movieData');
//get operation 11:37
router.get('/', async (req,res)=>{
    try{
        const data =await movieModel.find();   //async function will wait for request 
        res.status(200).send(data);//schema.find  //asnc await only deal with positive response so we use try catch

    }
 catch(error){
    res.status(404).send('Data not found')
 }
})




module.exports=router;