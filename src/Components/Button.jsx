import React, { useState } from 'react'
import '../App.css'
import { useEffect } from 'react'
export default function Button(props) {
    const [buttonCounter, setButtonCounter] = useState(0)
    const [natalakay, setTalakay] = useState("sumanth")
    const [myObject, setMyObject] = useState({ name: "sumanth", age: 22 })

    const handleMyButton = () => {
        alert(props.buttonName)
        setButtonCounter(buttonCounter + 1)
    }
    useEffect(() => {
        if (props.limit && buttonCounter > props.limit) {
            console.log(buttonCounter)

        }
        else {
            console.log("12")

        }

    }, [buttonCounter, natalakay, myObject.name])

    useEffect(() => {
        return () => {
            console.log("unmounting")
        }

    }, [])
    return (
        <div className='btn' onClick={handleMyButton}>{props.buttonName}</div>
    )
}
