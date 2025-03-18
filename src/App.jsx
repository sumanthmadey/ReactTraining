import { useState, useRef } from 'react'

import './App.css'
import axios from 'axios'
import Button from './Components/Button'
import { useEffect } from 'react'
function App() {
  const myref = useRef(null);
  const myref1 = useRef(null);
  const [showButton, setButtonVal] = useState(0)
  const [myData, setMayData] = useState([])
  const itemRefs = useRef([])
  const handleButton = () => {
    setButtonVal(1)
  }
  useEffect(() => {
    axios.get("https://63ad66e5da81ba97619bb4af.mockapi.io/user").then((res) => {
      setMayData(res.data)
    });

    myref.current.focus();
    myref.current.value = "loading"

    myref.current.style.background = "red"
  }, [])

  return (
    <>
      <div className='container'>
        <input type="text" ref={myref} />
        <Button rededed={myref}></Button>
        <ul>
          {myData && myData.map((itemlist, index) => {
            return (<li key={itemlist.id} ref={(el) => itemRefs.current[index] = el}>
              <Button controller={itemRefs.current[index]} > {itemlist.name}</Button>
            </li>)
          })}</ul>
        <div onClick={handleButton}>Click Here to Clean up</div>
        {showButton == 0 && (<><Button buttonName="Button A" limit="5" />
          <Button buttonName="Button B" />
          <Button buttonName="Button C" />
        </>)}
      </div >
    </>
  )
}

export default App
