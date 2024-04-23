import { JSXElement, createSignal } from "solid-js";
import SplitGreeting from "./SplitGreeting";

/** @returns {JSXElement} Greetings rendition using split props */
function SplitProps(): JSXElement {
  const [name, setName] = createSignal("Jakob");
  return (
    <>
      <SplitGreeting greeting={"Yo"} name={name()} style={{ color: "teal" }} />
      <button onClick={() => setName("Jarod")}>Set Name</button>
    </>
  );
}

export default SplitProps;
