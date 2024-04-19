import { createSignal } from "solid-js";
import { For } from "solid-js";
import { Dynamic } from "solid-js/web";
import { Options } from "vite-plugin-solid";

const RedThing = () => <strong style="color:red">Red Thing</strong>;
const GreenThing = () => <strong style="color:green">Green Thing</strong>;
const BlueThing = () => <strong style="color:blue">Blue Thing</strong>;

const options: any = {
  red: RedThing,
  green: GreenThing,
  blue: BlueThing
};

function DynamicTag() {
  const [selected, setSelected] = createSignal<string>("red");

  return (
    <>
      <select
        value={selected()}
        onInput={(e) => setSelected(e.currentTarget.value)}
      >
        <For each={Object.keys(options)}>
          {(color) => <option value={color}>{color}</option>}
        </For>
      </select>
      <Dynamic component={options[selected()]} />
    </>
  );
}

export default DynamicTag;
