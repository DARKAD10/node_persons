const express = require('express');
const router = express.Router();
const Person = require('./../models/Person')

router.post('/', async (req, res) =>{
    try{
        const data = req.body 
        const newPerson = new Person(data);
    // save the new person to the database
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);

    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({error: 'Internal Serval Error'})
    }
})


    router.get('/',async(req, res)=>{
        try{
            const data=  await Person.find();
            console.log("data fetched");
            res.status(200).json(data);
        }
        catch(error){
            console.log(error);
            res.status(500).json({error: 'Internal Serval Error'})
        }
    });

    
    router.get('/:workType', async (req,res)=>{
    try{
 
        
        const workType =req.params.workType;
     if(workType=='coder'|| workType=='waiter' || workType=='manager')
     {
         const response = await Person.find({work:workType});
         console.log('response fetched');
         res.status(200).json(response);
     }
 
     else{
         res.status(404).json({error: 'invalid work type'});
 
     }
 }  catch(error){
     console.log(error);
     res.status(500).json({error:'finternal server errors'});
 }
 
    });

    router.put('/:id', async (req, res)=>{
        try{
            const  personId = req.params.id;
            const updatedPersonData = req.body;

            const  response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
                new: true,
                runValidators: true,
            })

            if(!response){
                return res.status(404).json({error: 'Person not found'});
            }

            console.log('data updated')
            res.status(200).json(response);
        }

        catch(error){
            console.log(error);
           
            res.status(500).json({ error: 'Interal server Error'});

        }
    })
    

    router.delete('/:id', async(req, res )=>{
        try{
            const  personId = req.params.id;
            const response = await Person.findByIdAndDelete(personId);
            if(!response){
                return res.status(404).json({error: 'Person not found'});
            }
            
            console.log('data deleted')
            res.status(200).json({message: 'person Deleteed Successfully'});
       
            }
            catch(error){
                console.log(error);
           
                res.status(500).json({ error: 'Interal server Error'});

            }
        })
        






    module.exports = router;