import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector((state) => {
        return state.count
    })
    const name = useSelector((state) => {
        return state.name
    })

    const handleInc = () => {
        dispatch({
            type: "INCREMENT",
            payload: "ADD..."
        })
    }
    // const handleDec = () =>{
    //     dispatch({
    //         type : "DECREMENT",
    //         payload : "LESS.."
    //     })
    // }

    return (
        <>
            <h1 className='text-center text-secondary'>Counter : {count}</h1>
            <div className="text-center mt-5">
                <button type="button" className="btn btn-success" onClick={handleInc}>Increment</button>
                <button type="button" className="btn btn-warning ms-3" onClick={() => dispatch({ type: "DECREMENT", payload: "Less..." })}>Decrement</button>
            </div>
            <h3 className='text-center text-primary mt-3'>{name}</h3>
        </>
    )
}

export default Counter