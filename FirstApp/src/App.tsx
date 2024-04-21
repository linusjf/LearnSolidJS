import type { Component } from "solid-js";
import { Portal } from "solid-js/web";

import styles from "./App.module.css";
import Hello from "./Hello";
import HelloWorld from "./HelloWorld";
import Nested from "./Nested";
import Counter from "./Counter";
import ButtonCounter from "./ButtonCounter";
import FibCounter from "./FibCounter";
import Cats from "./Cats";
import SwitchMatch from "./SwitchMatch";
import DynamicTag from "./DynamicTag";
import ErrorMessage from "./ErrorMessage";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Hello name="Solid" />
        <HelloWorld />
        <Nested />
        <ErrorMessage />
        <Portal>
          <div class={styles.popup}>
            <h1>Popup</h1>
            <p>Some text you might need for something or other.</p>
          </div>
        </Portal>
        <Counter />
        <ButtonCounter />
        <FibCounter />
        <Cats />
        <SwitchMatch />
        <DynamicTag />
      </header>
    </div>
  );
};

export default App;
