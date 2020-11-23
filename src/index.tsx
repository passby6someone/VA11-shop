import React from "react";
import ReactDOM from "react-dom";
import { Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import loadable, { DefaultComponent } from "@loadable/component";

// import { Hello } from "./components/Hello";
import Loading from "./components/Loading";

const Hello = loadable(() => import("./components/Hello") as unknown as Promise<DefaultComponent<unknown>>, {
  fallback: <Loading />
});

function App():JSX.Element {
  return (
    <BrowserRouter basename="/VA11-shop">
      <Route path="/" component={Hello}>
      </Route>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
