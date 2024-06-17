const express = require('express');
const router = express.Router();

const menuitem = require('./../models/menu');

router.post('/', async (req, res) =>{
    try{
        const data = req.body ;
        const newmenu = new menuitem(data);
    // save the new person to the database
        const response = await newmenu.save();
        console.log("data saved");
        res.status(200).json(response);

    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({error: 'Internal Serval Error'})
    }
});

   router.get('/' , async(req,res)=>{
   try{
       const data = await menuitem.find();
       console.log('data fetched');
       res.status(200).json(data);

   }
         catch(error){
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error'});

         }
        });
    

        module.exports = router;
