import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { counterActions} from "../store/counterSlice"
import { privacyActions } from '../store/privacySlice'

const Controls = () => {
    const dispatch = useDispatch()
    const inputElement = useRef()

    const handleIncrement = () => {
        dispatch(counterActions.increment())
    }
    const handleDecrement = () => {
        dispatch(counterActions.decrement())
    }
    const handleAdd = () => {
        // dispatch({
        //     type: 'ADD',
        //     payload: {
        //         num: inputElement.current.value,
        //     }
        // })

        dispatch(counterActions.add({ num: inputElement.current.value, }))
        inputElement.current.value = "";

    }
    const handleSubtract = () => {

        dispatch(counterActions.subtract({ num: inputElement.current.value, }))
        inputElement.current.value = "";

    }
    const handlePrivacy = () => {
        dispatch(privacyActions.toggle())
    }


    return (
        <div>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>-1</button> <br /> <br />
            <input
                type="text"
                ref={inputElement}
            />
            <button onClick={handleAdd}>add</button>
            <button onClick={handleSubtract}>subtract</button> <br />
            <button onClick={handlePrivacy}>privacy</button>
        </div>
    )
}

export default Controls