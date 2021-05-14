import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.hydrate(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
