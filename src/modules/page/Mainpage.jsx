import React, { useRef } from 'react'
import { NavLink} from 'react-router-dom'
//import Card from '@mui/material/Card';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { setUserId } from '../../redux/result_reducer';

const Mainpage = () => {
    const inputRef=useRef(null);
    const dispatch = useDispatch();

    function startQuiz(){
      if(inputRef.current?.value){
          dispatch(setUserId(inputRef.current?.value))
      }
  }



  return ( 
  
    <div class ="container d-block m-5 p-5 card " >
       <h1 class="badge bg-primary fs-1 mb-4" >Quiz Application</h1>

<ol class="fs-5">
    <li>You will be asked 10 questions one after another.</li>
    <li>10 points is awarded for the correct answer.</li>
    <li>Each question has three options. You can choose only one options.</li>
    <li>You can review and change answers before the quiz finish.</li>
    <li>The result will be declared at the end of the quiz.</li>
</ol>
<form class="p-1 m-2">
  <TextField id="userId" inputRef={inputRef} label="Username*" variant="outlined" />

  <div class="m-2">
    <NavLink to="/quiz"><button type="submit" className="btn btn-primary mt-2" onClick={startQuiz} >Start Quiz</button></NavLink>
  </div>
</form>

 </div>
    
  
  )
}

export default Mainpage
