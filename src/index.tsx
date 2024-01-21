import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FunctionalComponent from "./pages/01_useState/FunctionalComponent";
import LazyInitialization from "./pages/01_useState/LazyInitialization";
import HowToUseCleanUpFunction from "./pages/02_useEffect/HoeToUseCleanUpFunction";
import WhatIsTheUseEffect from "./pages/02_useEffect/WhatIsTheUseEffect";
import HowToUseUseEffect from "./pages/02_useEffect/HowToUseUseEffect";
import WhatIsUseId from "./pages/03_useId/WhatIsUseId";
import WhenIsEffectCalled from "./pages/02_useEffect/WhenIsEffectCalled";
import WhatIsRenderAndCommit from "./pages/04_render_commit/WhatIsRenderAndCommit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/useState/1",
    element: <FunctionalComponent />,
  },
  {
    path: "/useState/2",
    element: <LazyInitialization />,
  },
  {
    path: "/useEffect/1",
    element: <WhatIsTheUseEffect />,
  },
  {
    path: "/useEffect/2",
    element: <HowToUseUseEffect />,
  },
  {
    path: "/useEffect/3",
    element: <HowToUseCleanUpFunction />,
  },
  {
    path: "/useEffect/4",
    element: <WhenIsEffectCalled />,
  },
  {
    path: "/useId/1",
    element: <WhatIsUseId />,
  },
  {
    path: "/render&commit/1",
    element: <WhatIsRenderAndCommit />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
