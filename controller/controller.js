import  Questions  from "../models/questionSchema"

import  Results  from "../models/resultSchema"
import question from "../database/data.js"
import { answers } from "../database/data.js"



export async function getQuestions(req,res){
    try {
        const q =await Questions.find();
        res.json(q)
    } catch (error) {
        res.json("error")
    }
    
}


//insert all question
export async function insertQuestions(req,res){
    try {
        Questions.insertMany({question,answers},
           function(err,data){
            res.json({msg:"data saved"})
           } )
    } catch (error) {
        res.json({error})
    }
}


// delete questions
export async function dropQuestions(req,res){
   try {
       await Questions.deleteMany();
       res.json({msg: "question deleted successfully"})
   } catch (error) {
      res.json({error});
   }
}

// get all result
export async function getResult(req,res){
   try {
     const r =await Results.find();
     res.json(r)
   } catch (error) {
      res,json({error})
   }
    
}

/** post all result */
export async function storeResult(req, res){
    try {
         const { username, result, attempts, points, achieved } = req.body;
         if(!username && !result) throw new Error('Data Not Provided...!');
 
         Results.create({ username, result, attempts, points, achieved }, function(err, data){
             res.json({ msg : "Result Saved Successfully...!"})
         })
 
    } catch (error) {
         res.json({error})
    }
 }
 
 /** delete all result */
 export async function dropResult(req, res){
     try {
         await Results.deleteMany();
         res.json({ msg : "Result Deleted Successfully...!"})
     } catch (error) {
         res.json({ error })
     }
 }