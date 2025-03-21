import { useState } from 'react'
import '../App.css'
import { useEffect } from 'react'

interface ButtonProps {
    onClick: () => void;
    buttonName: string;
    limit?: number
}
function Button(props: ButtonProps) {
    const [buttonCounter, setButtonCounter] = useState(0)
    // @ts-ignore
    const [natalakay, setTalakay] = useState<string>("sumanth")
    // @ts-ignore
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
export default Button
