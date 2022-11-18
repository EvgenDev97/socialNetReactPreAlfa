import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postData = [
  { id: 1, post: "PostOne", likesCount: 28 },
  { id: 2, post: "PostTwo", likesCount: 13 },
];

let dialogsData = [
  { id: 1, name: "First name" },
  { id: 2, name: "Second Name" },
  { id: 3, name: "Third Name" },
  { id: 4, name: "Fourth Name" },
];

let messages = [
  { id: 1, msg: "Hi bro" },
  { id: 2, msg: "how are you?" },
  { id: 3, msg: "i don`t know what write here" },
  { id: 4, msg: "some msg" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
