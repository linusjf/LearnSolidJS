import type { Component } from "solid-js";

import styles from "./App.module.css";
import Events from "./Events";
import Styles from "./Styles";
import Classes from "./Classes";
import Refs from "./Refs";
import ForwardRefs from "./ForwardRefs";
import Spreads from "./Spreads";
import Directives from "./Directives";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Spreads />
        <ForwardRefs />
        <Refs />
        <Directives />
        <Classes />
        <Events />
        <Styles />
      </header>
    </div>
  );
};

export default App;
