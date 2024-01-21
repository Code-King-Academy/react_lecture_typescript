import { useState } from "react";
import StyledButton from "../components/StyledButton";

const heavyComputationFunction = (data: number[]) => {
  return data.filter((item) => item > 5);
};

const LazyInitialization = () => {
  // 초깃값이 복잡하거나, 무거운 연산을 포함하고 있을 때 사용하라!
  // 초기값으로 함수를 넘기고, 그 함수의 return 값을 초깃값으로 사용한다.
  // 이 게으른 초기화 함수는 오로지 state 가 처음 만들어질때만 사용된다.
  // 만약 이후에 리렌더링이 발생한다면 이 함수의 실행은 무시된다.
  const [state, setState] = useState(() => {
    return heavyComputationFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 만약 오래걸리는 작업이라면?;
  });

  console.log("state", state);

  // 리액트에서 렌더링이 실행될때마다 함수컴포넌트의 함수가 다시 실행된다는 점을 명심해야한다.
  // 따라서 useState 의 값도 재실행되기 때문에, 초기값을 함수로 넘겨주면, 불필요한 연산을 줄일 수 있다.
  // 클로저를 통해 초기값은 최초에만 사용되기는 하지만, useState 를 호출할때 넘겨주는 인자값이 만약 아주 무거운 연산이 된다고하면,
  // 리렌더링이 발생할때마다 불필요한 연산이 발생하게 된다. 따라서 이런 경우에는 함수를 넘겨주는 것이 좋다.

  // 게으른 최적화는 무거운 연산을 사용할 때 쓰는게 좋다.
  // 예를 들면, localStorage 나 sessionStorage 에 대한 접근이나, map, filter, find 같은 배열에 대한 접근,
  // 혹은 초기값 계산을 위해 함수를 사용해야만 하는 경우에 사용하면 좋다.

  return (
    <div className="App-header">
      <h3>Lazy Initialization</h3>
      <p>게으른 초기화</p>
      {state.map((item, index) => (
        <StyledButton key={index}>{item}</StyledButton>
      ))}
    </div>
  );
};

export default LazyInitialization;
