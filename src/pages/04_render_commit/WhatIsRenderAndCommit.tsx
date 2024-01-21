import { Link } from "react-router-dom";

const WhatIsRenderAndCommit = () => {
  /**
    Before your components are displayed on screen, they must be rendered by React. 
    Understanding the steps in this process will help you think about how your code executes and explain its behavior.

    Triggering a render (delivering the guest’s order to the kitchen)
    Rendering the component (preparing the order in the kitchen)
    Committing to the DOM (placing the order on the table)
    */
  return (
    <div className="App-header">
      <h1>Render & Commit</h1>
      <ol>
        <li>
          Triggering a render (delivering the guest’s order to the kitchen)
        </li>
        <li>Rendering the component (preparing the order in the kitchen)</li>
        <li>Committing to the DOM (placing the order on the table)</li>
        <Link to="https://react.dev/learn/render-and-commit">
          Documentation
        </Link>
      </ol>
    </div>
  );
};

export default WhatIsRenderAndCommit;
