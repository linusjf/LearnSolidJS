import type { Component } from "solid-js";

import styles from "./App.module.css";
import DefaultProps from "./DefaultProps";
import SplitProps from "./SplitProps";
import PropsChildren from "./PropsChildren";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <DefaultProps />
        <SplitProps />
        <PropsChildren />
      </header>
    </div>
  );
};

export default App;
