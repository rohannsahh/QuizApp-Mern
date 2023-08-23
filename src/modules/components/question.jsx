import React, { useEffect,useState } from 'react'
//import data from '../sources/data'
import { useDispatch,useSelector } from 'react-redux';

/** Custom Hook */
import {updateResult} from '../../hooks/setResult'

import { useFetchQestion } from '../../hooks/FetchQuestion';




const Questions = ({onChecked}) => {
 
  const [checked,setChecked]=useState(undefined)
  const { trace } = useSelector(state => state.questions);
    const result = useSelector(state => state.result);
    const [{ isLoading,  serverError}] = useFetchQestion() 

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()

 useEffect(()=>{
  dispatch(updateResult({ trace, checked}))
    }, [checked])

    function onSelect(i){
      onChecked(i)
      setChecked(i)
      dispatch(updateResult({ trace, checked}))
  }

  if(isLoading) return <h3 className='text-light'>isLoading</h3>
  if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>
   
  return (
    <div>
      <h2> {questions?.question}</h2>
    
   
      <ul key={questions?.id}>
    {
     questions?.options.map((q,i)=>(
      

        <li key={i} class="list-unstyled">
          <input class="form-check-input"
            type="radio"
            value={false}
            name="options"
            id={`q${i}-option`}
            onChange={onSelect()}
          />
         <label htmlfor={`q${i}-option`}>{q}</label> 
         <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div>

        </li>
   ))
      }  
      </ul>
      
    </div>
  )
}

export default Questions
