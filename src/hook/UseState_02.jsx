import React, { useState } from 'react'


function UseState_02() {
  const [names, setNames] = useState(["홍길동", "김민수"]);
  const [input, setInput] = useState('');

  const handleInputChage = (e) => {
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setNames((prevState) => {
      console.log('이전 state', prevState);
      return [input, ...prevState];
    })
  }

  return (
    <>
      <input type="text" value={input} onChange={handleInputChage}/>
      <button onClick={handleUpload}>Upload</button>
      {names.map((name) => {
        return <p>{name}</p>
      })}
    </>
  )
}

export default UseState_02