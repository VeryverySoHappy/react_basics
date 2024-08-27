import React, { useState, useEffect } from 'react'

function UseEffect_01() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  // 렌더링 될때 마다 매번 실행됨
  useEffect(() => {
    // ...
    console.log('렌더링');
  })

  // 맨 처음 컴포넌트가 화면에 렌더링 되었을 때(마운팅), count가 업데이트 될 때 마다 실행
  useEffect(() => {
    console.log('count');
  }, [count]);

  // 마운팅 + name이 변경될때마다 실행
  useEffect(() => {
    console.log();
  }, [name]);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange}/>
      <span>name: { name }</span>
    </div>
  )
}

export default UseEffect_01

// useEffect
// mount (화면에 첫 렌더링), update(다시 렌더링), unmount(화면에서 사라질 때) 특정 작업을 하고싶을 때 사용

// useEffect(()=>{})
// useEffect는 인자로 콜백함수(다른 함수의 인자로 전달된 함수)를 받음

// 형태1
// useEffect(() => { 작업 });
// 렌더링 될때 마다 실행

// 형태2
// useEffect(() => { 작업 }, [value]);
// [value] 두번째 인자로 배열을 받음 => 디펜던시 어레이
// 화면에 첫 렌더링 될때 실행
// value 값이 바뀔때 실행

// 형태2-2
// useEffect(() => { 작업 }, []);
// 두번째 인자를 빈배열로 전달하면 화면에 첫 렌더링 될때만 실행

// return ()=>{}
// useEffect(() => { // 구독... return ()=> { // 구독해지 (정리하는 작업 작성) }},[]);
// 작업을 취소할때 사용
// unmount, 다시 렌더링 되기 전까지 작업
// Ex) 구독을 신청하면, 이걸 취소할때 사용하는건 clean up
// Ex) 타이머를 시작했다면 이걸 멈추는 작업을 하는건 clean up