import { useEffect, useState } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { getData } from './store/sliceUrl'

function App() {
  const [data, setData] = useState(null)
  const [text,setText] = useState('')
  const dispatch = useAppDispatch()
  const {shortUrls} = useAppSelector((state)=>state.todoSlice)

  const handleInput = (e:any)=>{
    setText(e.target.value)
  }

  const handleClick = ()=>{
    fetchText(text)
  }


  const fetchText = (text:any)=>{
    dispatch(getData(text))
  }
  console.log('asd',shortUrls)
  return (
    <>
      <div>
        {shortUrls.map((item)=>(<div key={item}>{item}</div>))}
        <input value={text} onChange={handleInput}/> 
        <button onClick={handleClick}/>
      </div>
    </>
  )
}

export default App
