import React, { useState } from 'react'

function UseState() {
  const [time, setTime] = useState(1);

  const handleClick = () => { 
    let newTime;

    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }

    setTime(newTime);
  }
  
  console.log('업데이트');

  return (
    <div>
      <span>현재 시각: {time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default UseState

// state 컴포넌트의 상태
// useState (state)상태를 간편하게 생성하고 업데이트 할 수 있는 도구

// const [state, setState] = useState(초기값);
// const [time, setTime] = useState(5);
// time = 5; (초기값)
