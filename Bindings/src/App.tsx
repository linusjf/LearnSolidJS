import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import Events from "./Events";
import Styles from "./Styles";
import Classes from "./Classes";
import Refs from "./Refs";
import ForwardRefs from "./ForwardRefs";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Refs />
        <Classes />
        <ForwardRefs />
        <Events />
        <Styles />
      </header>
    </div>
  );
};

export default App;
