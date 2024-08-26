import React, { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업!");
  return ["홍길동", "김민수"];
};

function UseState_03() {
  const [names, setNames] = useState(() => {
    return heavyWork();
    // 초기값을 가져올때, 무거운 작업을 해야된다면 UseState_02처럼 바로 값을 넣어주는 것이 아닌
    // 콜백 형태로 값을 리턴
    // => 맨처음 렌더링 할 때만 그 함수가 불리어짐
  });
  const [input, setInput] = useState("");

  const handleInputChage = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 state", prevState);
      return [input, ...prevState];
    });
  };

  return (
    <>
      <input type="text" value={input} onChange={handleInputChage} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name) => {
        return <p>{name}</p>;
      })}
    </>
  );
}

export default UseState_03;
