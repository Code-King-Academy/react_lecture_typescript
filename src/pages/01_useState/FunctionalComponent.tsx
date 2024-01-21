import { useState } from "react";
import StyledButton from "../../components/StyledButton";

const FunctionalComponent = () => {
  // 상태는 왜 필요한가?
  // 웹 앱을 개발할 때 상태는 어떠한 의미를 가진 값이며, 애플리케이션의 시나리오에 따라 계속 변경될 수 있는 값을 의미합니다.
  // 웹 서비스에서 점차 다양한 기능이 제공됨에 따라, 웹 내부에서 관리해야할 상태가 점차 증가하였고,
  // 이에 따라 상태를 관리하는 방법에 대한 고민이 필요해졌습니다.
  // Flux 패턴의 등장
  // Flux 패턴은 Facebook 에서 개발한 웹 애플리케이션 아키텍처 패턴이다. 단방향 데이터 흐름을 가지고 있습니다.
  // 기본적인 단방향 데이터 흐름 Action -> Dispatcher -> Model -> View

  // Flux 패턴에서 View 또한 액션을 호출할 수 있으며, 이후 프로세스는 동일하다.
  // 단방향 데이터 흐름의 장점 -> 데이터 흐름 추적하기 쉽고, 코드를 이해하기 쉽다 -> 단점은 코드가 많아짐(근데 장점이 단점을 상쇄함)

  // MVC 패턴이란
  // MVC 패턴은 Model, View, Controller 로 구성되어 있으며, 이들은 서로 독립적으로 동작한다.

  // React 는 View 만 신경쓰는 라이브러리

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
      <h1>useState 정복하기</h1>
      <p>상태를 사용해라!!! 상태가 뭔데?</p>

      <StyledButton onClick={handleClick}>{state}</StyledButton>
    </div>
  );
};

export default FunctionalComponent;
