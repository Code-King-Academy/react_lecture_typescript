import hook from "./hook.png";

const Hook = () => {
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
