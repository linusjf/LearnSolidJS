import { JSXElement, createSignal, onCleanup } from "solid-js";

/** @returns {JSXElement} Display count and double count */
function Counter(): JSXElement {
  const [count, setCount] = createSignal<number>(0);

  const doubleCount = () => count() * 2;

  const timer = setInterval(() => setCount((c) => c + 1), 1000);
  onCleanup(() => clearInterval(timer));

  return (
    <>
      <div>Count : {count()}</div>
      <div>Double count: {doubleCount()}</div>
    </>
  );
}

export default Counter;
