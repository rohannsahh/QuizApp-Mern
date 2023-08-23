import express from 'express';
import morgan from 'morgan';
import router from './router/route.js';
import cors from 'cors';

// import database
import mongoose from './database/database.js';
mongoose()
const app =express()

app.use(cors());
//app middlewares
app.use(morgan('tiny'));
app.use(express.json())



//routes
app.use('/',router)  //apis






app.get('/', (req,res)=>{
    try{
        res.json('Get request')
    }
    catch(error){
        res.json(error)
    }
} )


const server=app.listen(1110,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server started",server.address().port);
    }
})