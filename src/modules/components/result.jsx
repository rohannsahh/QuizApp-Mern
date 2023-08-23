import React from 'react';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { attempts_Number,earnPoints_Number,flagResult } from '../../helper/helper';

/** import actions  */
import { resetAllAction } from '../../redux/question_reducer';
import { resetResultAction } from '../../redux/result_reducer';
import { usePublishResult } from '../../hooks/setResult';
import Resulttable from './resulttable';



const Result = () => {
    
    const dispatch = useDispatch()
    const { questions : { queue ,answers}, result : { result, userId}}  = useSelector(state => state)

    const totalPoints = queue.length * 10; 
    const attempts = attempts_Number(result);
    const earnPoints = earnPoints_Number(result, answers, 10)
    const flag = flagResult(totalPoints, earnPoints)


    /** store user result */
    usePublishResult({ 
        result, 
        username : userId,
        attempts,
        points: earnPoints,
        achived : flag ? "Passed" : "Failed" });

    function onRestart(){
        dispatch(resetAllAction())
        dispatch(resetResultAction())
    }
    
   



  return (
    <div class ="container d-block m-5 p-5 card ">
      <h1 class="badge bg-primary fs-1 mb-4" >Quiz Application</h1>

      <table class="table">
  <thead>
    <tr>
      <th scope="col">Username</th>
      <th scope="col">{userId || ""}</th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>Total Quiz Points :</td>
      <td>{totalPoints || 0}</td>
      
    </tr>
    <tr>
      
      <td>Total Questions :</td>
      <td>{ queue.length || 0}</td>
      
    </tr>
    <tr>
      
      <td>Total Attempts :</td>
      <td>{attempts || 0}</td>
      
    </tr>
    <tr>
      
      <td>Total Earn Points :</td>
      <td>{earnPoints || 0}</td>
      
    </tr>
    <tr>
      
      <td>Quiz Result</td>
      <td>{flag ? "Passed" : "Failed"}</td>
      
    </tr>

  </tbody>
</table>


    
  

     <div class="container pt-5">
         <Resulttable></Resulttable>
      </div>



      <div class="m-2">
    <NavLink to="/"><button type="submit" className="btn btn-primary mt-2" onClick={onRestart} >Restart</button></NavLink>
      </div>
      
      

    </div>
  )
}

export default Result
