import { useId } from "react";

const WhatIsUseId = () => {
  const passwordHintId = useId();

  console.log("passwordHintId", passwordHintId);

  /**
    HTML accessibility attributes like aria-describedby let you specify that two tags are related to each other. For example, you can specify that an element (like an input) is described by another element (like a paragraph).
    HTML 접근성 속성인 aria-describedby는 두 태그가 서로 관련이 있다는 것을 지정할 수 있게 해줍니다. 예를 들어, 한 요소(예: 입력 필드)가 다른 요소(예: 문단)에 의해 설명된다는 것을 지정할 수 있습니다.

    이는 스크린 리더와 같은 보조 기술을 사용하는 사용자가 웹사이트를 더 쉽게 이해하고 사용할 수 있게 돕습니다. 예를 들어, aria-describedby 속성을 사용하면 입력 필드에 대한 추가 설명을 제공하는 문단과 입력 필드를 연결할 수 있습니다.
    위의 코드에서는 useId 훅을 사용하여 고유한 ID를 생성하고, 이 ID를 input 태그의 aria-describedby 속성과 p 태그의 id 속성에 전달하여 두 요소가 서로 연결되어 있다는 것을 나타냅니다. 이렇게 하면, 스크린 리더는 p 태그의 내용을 읽어서 input 필드에 대한 추가 정보를 제공할 수 있습니다.
   */

  return (
    <div className="App-header">
      <h1>useId</h1>
      <p>
        useId is a React Hook for generating unique IDs that can be passed to
        accessibility attributes.
      </p>

      <input type="password" aria-describedby={passwordHintId} />
      <p id={passwordHintId} />
    </div>
  );
};

export default WhatIsUseId;
