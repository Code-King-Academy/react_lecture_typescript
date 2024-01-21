import { useEffect } from "react";
import 컴포넌트생명주기 from "../../컴포넌트생명주기.png";

const WhenIsEffectCalled = () => {
  // effect call back 이 호출되는 시점은 언제인가요??
  // https://react.dev/reference/react/useLayoutEffect#examples

  // useEffect vs useLayoutEffect 의 차이점은?
  // https://react.dev/learn/render-and-commit
  // render vs commit 단계의 차이 (?)
  useEffect(() => {
    console.log("effect callback function called!");
  }, []);

  console.log("컴포넌트가 렌더링 중입니다~~~");

  return (
    <div className="App-header">
      <h1>Effect 함수가 호출되는 시점</h1>
      <img src={컴포넌트생명주기} alt="컴포넌트 생명주기" width={800} />
    </div>
  );
};

export default WhenIsEffectCalled;
