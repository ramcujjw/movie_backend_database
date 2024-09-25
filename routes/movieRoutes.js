const express=require ('express');
const router=express.Router();
router.use(express.json())//mandatory for push operation 1
router.use(express.urlencoded({extended:true}));//images or files include cheyanamekil mandotory this code
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

//post operation
router.post('/addMovies',async (req,res)=>{
    try{
        var item=req.body;//we are gonna add data 
        const data1=new movieModel(item);
    //we have to  save 
    const saveData= await data1.save();// the data name (for me its data1) .save 
    res.status(200).send("post successful");
    }
    catch(error){
        res.status(404).send("post unsuccessful");  

    }
})



//put  operation fro updates
router.put('/edit/:id',async (req,res)=>{
    try {
        const id =req.params.id;
        const data =await movieModel.findByIdAndUpdate(id,req.body);//the req.body contain the thing to be updated
        res.status(200).send("Update successful"); 
    } catch (error) {
        res.status(404).send("Update unsuccessful"); 
    }
})
//delete operation
router.delete('/remove/:id',async (req,res)=>{
    try {
        const id =req.params.id;
        const data2 =await movieModel.findByIdAndDelete(id);//the req.body contain the thing to be updated
        res.status(200).send("Delete successful"); 
    } catch (error) {
        res.status(404).send("Delete unsuccessful"); 
    }
})

module.exports=router;