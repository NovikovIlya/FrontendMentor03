import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState(null)
  const [text,setText] = useState('')

  const handleInput = (e:any)=>{
    setText(e.target.value)
  }

  const handleClick = ()=>{
    fetchText(text)
  }


  const fetchText = async(text:any)=>{
    const res = await axios.post('https://cleanuri.com/api/v1/shorten',{
     data: {"url":text},
    })
  
    setData(res)
  }

  return (
    <>
      <div>
        <div>{data}</div>
        <input value={text} onChange={handleInput}/> 
        <button onClick={handleClick}/>
      </div>
    </>
  )
}

export default App
