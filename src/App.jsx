import React from "react";
import "./App.scss";
import "normalize.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<Dialogs state={props.appState.dialogsPage} />}
            />
            {/* {If you want to match more of the URL because you have child routes use a trailing * as in <Route path="dialogs/*">. */}
            <Route
              path="/profile"
              element={<Profile profileState={props.appState.profilePage} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
