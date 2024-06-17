const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());



const Person = require('./models/Person');
const menuitem = require('./models/menu');
app.get('/', (req, res) => {
    res.send("Hello, welcome to my school");
});

app.post('/person', async (req, res)=>{
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

});

//get method to get the person
app.get('/person',async(req, res)=>{
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

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});



app.post('/menu', async (req, res)=>{
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

   app.get('/menu' , async(req,res)=>{
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
    


app.get('/person/:workType', async (req,res)=>{
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
    res.status(500).json({error:'internal server errors'});
}

    })

 // import to the server
   const menuRoutes = require('./routes/menuRoutes') ;

   app.use('/menu' , menuRoutes);
    const personRoutes =  require('./routes/personRoutes');
    app.use('/person' , personRoutes);


    app.listen(300,()=>{
       console.log('listening on port 3000');
    })
