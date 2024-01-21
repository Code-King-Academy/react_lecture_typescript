import { useState } from "react";
import StyledButton from "../components/StyledButton";

const FunctionalComponent = () => {
  const [state, setState] = useState(0);

  console.log("useState", useState(1));
  // 함수를 호출했더니 return 값으로 [] 배열을 받았는데 2개의 요소를 가지고 있어요.
  // 하나는 값이고, 하나는 '함수' 에요

  // 어떤 함수(useState) 내부에 선언된 함수
  // setState 가 함수의 실행이 종료된 이후에도 (useState 가 호출된 이후에도), 지역변수인 state 를 계속 참조할 수 있다는 것을 의미한다.

  const handleClick = () => {
    setState((prev) => prev + 1);
    console.log("state", state); // 여기서 state 의 값이 이전의 state 인 이유는?
  };

  return (
    <div className="App-header">
      <h1>useState 이걸로 종결</h1>
      <p>상태를 사용해라! 그래서 상태가 뭔데?</p>
      <a
        href="https://react.dev/reference/react/useState"
        style={{ color: "#61dafb" }}
      >
        공식 문서
      </a>

      <StyledButton onClick={handleClick}>{state}</StyledButton>
    </div>
  );
};

export default FunctionalComponent;
