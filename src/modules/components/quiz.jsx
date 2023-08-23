import React ,{useState}from 'react'

import Questions from './question';
import { MoveNextQuestion,MovePrevQuestion } from '../../hooks/FetchQuestion';
import { PushAnswer } from '../../hooks/setResult';


/** redux store import */
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'


const Quiz = () => {
  
    const [check, setChecked] = useState(undefined)

    const result = useSelector(state => state.result.result);
    const { queue, trace } = useSelector(state => state.questions);
    const dispatch = useDispatch()

//onnext event
    function onNext(){
        if(trace < queue.length){
            /** increase the trace value by one using MoveNextAction */
            dispatch(MoveNextQuestion());

            /** insert a new result in the array.  */
            if(result.length <= trace){
                dispatch(PushAnswer(check))
            }
        }
     
        /** reset the value of the checked variable */
        setChecked(undefined)
    }
//onprev event
    function onPrev(){
        if(trace > 0){
            /** decrease the trace value by one using MovePrevQuestion */
            dispatch(MovePrevQuestion());
        }
    }

    function onChecked(check){
        setChecked(check)
    }

    /** finished exam after the last question */
    if(result.length && result.length >= queue.length){
        return <Navigate to={'/result'} replace={true}></Navigate>
    }


  return (
    <div className="container card m-5 p-5">
       <h1 class="badge bg-primary fs-1 mb-3">Quiz Application</h1>
     

 {/* display questions */}
 <Questions onChecked={onChecked} />



    <div class="m-5">
    <button type="button" class="btn btn-danger m-5  " onClick={onPrev}>Prev</button>
    <button type="button" class="btn btn-success m-5" onClick={onNext}>Next</button>
    </div>


    </div>
  )
}

export default Quiz
