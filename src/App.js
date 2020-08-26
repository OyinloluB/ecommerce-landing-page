import React from "react";
import Navigation from "./navigation/Navigation";
import Main from "./main/Main";
import Styles from "./app.module.css";

function App() {
  return (
    <div className={Styles.appContainer}>
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
