import { Fragment, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { addCopyText, getData } from '../store/sliceUrl'

function MainPage() {
  const [text, setText] = useState('')
  const [isCopy,setIsCopy] = useState(false)
  const { shortUrls, copyText } = useAppSelector((state) => state.sliceUrl)
  const dispatch = useAppDispatch()

  const handleInput = (e: any) => {
    setText(e.target.value)
  }

  const handleClick = () => {
    dispatch(getData({text:text,copyText:text}))
    dispatch(addCopyText(text))
  }

  const setCopyText = (text:any) => {
    setIsCopy(true)
    navigator.clipboard.writeText(text)
  }

  return (
    <>
      <div>
        <input value={text} onChange={handleInput} />
        <button onClick={handleClick} />
        
        {shortUrls.map((item) => (
          <Fragment key={item}>
             <div key={item.copyText}>{item.copyText}</div>
            <div key={item.text}>{item.text}</div>
            <button onClick={()=>setCopyText(item)}>{isCopy ? 'Copied' : 'Copy'}</button>
          </Fragment>
        ))
        }

      </div>
    </>
  )
}

export default MainPage
