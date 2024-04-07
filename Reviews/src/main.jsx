import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Check from "./component/Check.jsx";
import Features from "./component/features.jsx";
import Explore from "./component/explore.jsx";
import Recent from "./component/Recent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Check />
    <Features />
    <Explore />
    <Recent />
  </React.StrictMode>
);
