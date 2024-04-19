import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Hello from './Hello';
import HelloWorld from './HelloWorld';
import Nested from './Nested';
import Counter from './Counter';
import ButtonCounter from './ButtonCounter';
import FibCounter from './FibCounter';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
    <Hello name="Solid"/>
    <HelloWorld/>
    <Nested/>
    <Counter/>
    <ButtonCounter/>
    <FibCounter/>
      </header>
    </div>
  );
};

export default App;
