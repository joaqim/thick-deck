import { createElement } from "react";
import ReactDOM from "react-dom";
import { Main } from "./Main";

export const App = (): void => {
  ReactDOM.render(
    createElement(Main, { app: this }),
    document.getElementById("app") || document.createElement("div")
  );
};
App();
