import type { Component } from "solid-js";

import logo from "./logo.svg";
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

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Hello name="Solid" />
        <HelloWorld />
        <Nested />
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
