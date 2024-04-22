import { createSignal } from "solid-js";
import Greeting from "./Greetings";

/**
 *
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
