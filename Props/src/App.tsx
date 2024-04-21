import type { Component } from "solid-js";

import styles from "./App.module.css";
import DefaultProps from "./DefaultProps";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <DefaultProps />
      </header>
    </div>
  );
};

export default App;
