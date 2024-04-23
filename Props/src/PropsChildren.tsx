import { createSignal, For, JSXElement } from "solid-js";
import ColoredList from "./ColoredList";

/**
 * @returns {JSXElement} ColoredList
 */
function PropsChildren(): JSXElement {
  const [color, setColor] = createSignal("purple");
  return (
    <>
      <ColoredList color={color()}>
        <For each={["Most", "Interesting", "Thing"]}>
          {(item) => <div>{item}</div>}
        </For>
      </ColoredList>
      <button onClick={() => setColor("teal")}>Set Color</button>
    </>
  );
}

export default PropsChildren;
