import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import Events from "./Events";
import Styles from "./Styles";
import Classes from "./Classes";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Classes />
        <Events />
        <Styles />
      </header>
    </div>
  );
};

export default App;
