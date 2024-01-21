import hook from "./hook.png";

const Hook = () => {
  //  리액트(React)에서 훅(Hook)은 함수형 컴포넌트에서 리액트의 상태 관리 및
  //  생명주기 기능을 "연결(hook into)"할 수 있게 하는 특별한 함수입니다. 리액트
  //  16.8 버전에서 도입된 훅은 클래스 컴포넌트에서만 사용할 수 있었던 다양한
  //  기능들을 함수형 컴포넌트에서도 사용할 수 있게 해줍니다.

  // 상태관리
  // 생명주기 기능
  // 커스텀 로직 재사용
  // 렌더링과 분리된 로직

  return (
    <div className="App-header">
      <h1>리엑트 훅이란?</h1>
      <img src={hook} alt="hook" style={{ width: 250 }} />

      <p>고리? 매달기 위함(?) </p>
      <h3 style={{ width: "80%" }}>
        Hooks let you use different React features from your components. <br />
        You can either use the built-in Hooks or combine them to build your own.
      </h3>
      <p style={{ width: "80%" }}>
        훅을 사용하면 구성 요소의 다양한 리액트 기능을 사용할 수 있습니다.
        <br />
        내장된 후크를 사용하거나 이를 결합하여 자체적으로 만들 수 있습니다.
      </p>
      <a
        href="https://react.dev/reference/react/hooks"
        style={{ color: "#61dafb" }}
      >
        공식 문서
      </a>
    </div>
  );
};

export default Hook;
