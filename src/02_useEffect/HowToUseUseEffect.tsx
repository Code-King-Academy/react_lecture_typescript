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

  useEffect(() => {
    // 외부 시스템이란?
    fetch(url)
      .then((res) => res.json())
      .then((data: ToDo[]) => setToDos(data.slice(0, 10)))
      .catch((err) => console.log(err));
  }, []);

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
