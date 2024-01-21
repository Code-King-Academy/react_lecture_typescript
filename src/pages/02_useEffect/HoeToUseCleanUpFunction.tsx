import { useEffect, useState } from "react";
import StyledButton from "../../components/StyledButton";

const HowToUseCleanUpFunction = () => {
  const [counter, setCounter] = useState(0);
  /**
    클린업 함수의 목적 -> 일반적으로 이 클린업 함수는 이벤트를 등록하고 지울 때, 사용해야 한다고 알려져 있다.
    클린업 함수는 이전 state 를 참조해 실행된다. 
    여기서 중요한 것은, 클린업 함수는 비록 새로운 값을 기반으로 렌더링 뒤에 실행되지만 이 변경된 값을 읽는 것이 아니라,
    함수가 정의됐을 당시에 선언됐던 이전 값을 보고 실행된다는 것이다.
  */

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    const addMouseEvent = () => {
      console.log("addMouseEvent");
    };

    window.addEventListener("click", addMouseEvent);

    // 클린업 함수
    // 그리고 이 클린업 함수는 다음 렌더링이 끝난 뒤에 실행된다.
    return () => {
      console.log("클린업 함수 실행");
      window.removeEventListener("click", addMouseEvent);
    };
  }, [counter]);

  return (
    <div className="App-header">
      <h1>How To Use CleanUp Function</h1>
      <StyledButton onClick={handleClick}>{counter}</StyledButton>
    </div>
  );
};

export default HowToUseCleanUpFunction;
