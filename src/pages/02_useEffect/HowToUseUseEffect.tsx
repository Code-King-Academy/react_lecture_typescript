import { useEffect, useState } from "react";

type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const HowToUseUseEffect = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const [toDos, setToDos] = useState<ToDo[]>([]);
  // TypeScript 제네릭을 사용하여, useState의 타입을 명시해주는 의미는?
  // 제네릭의 '사전적 의미' -> 특징이 없거나 일반적인 것(not specific, general) 을 의미함.

  /**
    Connecting to an external system 
    Some components need to stay connected to the network, 
    some browser API, or a third-party library, while they are displayed on the page. 
    These systems aren’t controlled by React, so they are called external.
    To connect your component to some external system, call useEffect at the top level of your component:

    외부 시스템에 연결하기
    일부 컴포넌트는 페이지에 표시되는 동안 네트워크, 브라우저 API 또는 타사 라이브러리에 연결된 상태로 유지해야합니다.
    이러한 시스템은 React에서 제어하지 않으므로 외부라고합니다.
    컴포넌트를 외부 시스템에 연결하려면 컴포넌트의 최상위 수준에서 useEffect를 호출하십시오.
   */

  useEffect(() => {
    // 외부 시스템이란?
    fetch(url)
      .then((res) => res.json())
      .then((data: ToDo[]) => setToDos(data.slice(0, 10)))
      .catch((err) => console.log(err));
  }, []);

  /**
    @param effect — Imperative function that can return a cleanup function
    @param deps — If present, effect will only activate if the values in the list change.

    한글로 직역하면
    @param effect — 클린업 함수를 반환할 수있는 명령형 함수
    @param deps — 존재하는 경우 목록의 값이 변경 될 때만 효과가 활성화됩니다.
   */

  return (
    <div className="App-header">
      <h3>useEffect 사용방법</h3>
      {toDos.map((toDo, index) => (
        <div key={index}>
          {index + 1}. {toDo.title}
        </div> // 타입을 지정해주지 않을 경우, never[] 타입이 된다.
        // 그 이유는 ts 는 이 배열이 어떤 타입의 요소를 가질지 알 수 없으므로, never[] 타입으로 '추론'하기 때문이다.
      ))}
    </div>
  );
};

export default HowToUseUseEffect;
