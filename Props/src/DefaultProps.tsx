import { JSXElement, createSignal } from "solid-js";
import Greeting from "./Greetings";

/**
 * @returns {JSXElement} Greetings
 */
export default function DefaultProps() {
  const [name, setName] = createSignal();
  return (
    <>
      <Greeting greeting="Hello" />
      <Greeting name="Jeremy" />
      <Greeting name={name()} />
      <button onClick={() => setName("Jarod")}>Set Name</button>
    </>
  );
}
