import React from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { addMoney, makeAPI, removeMoney, fetchUserById } from '../reducers/todoSlice'



const BankApp = () => {
    const dispatch = useDispatch()
    const stateValue = useSelector((state) => {
        return state.dasdas.accountBalance
    })
    return (
        <>
            <h1>UTTUTI BANK</h1>
            <div>{stateValue}</div>
            <button onClick={() => dispatch(addMoney(100))} > Add Money</button>
            <button onClick={() => dispatch(removeMoney(10))} >Remove Money</button>
            <button onClick={() => dispatch(fetchUserById())} >Make API</button>

        </>


    )
}
export default BankApp


