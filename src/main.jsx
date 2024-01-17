import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BackToTop from "./components/Back-to-top.jsx";
import Slide from "./slide.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <BackToTop />
    <Slide />
  </React.StrictMode>
);
