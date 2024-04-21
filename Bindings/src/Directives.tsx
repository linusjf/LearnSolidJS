// @ts-nocheck
import { createSignal, Show } from "solid-js";
import clickOutside from "./ClickOutside";
import "./styles.css";

function Directives() {
  const [show, setShow] = createSignal(false);
  return (
    <Show
      when={show()}
      fallback={<button onClick={(e) => setShow(true)}>Open Modal</button>}
    >
      <div class="modal" use:clickOutside={() => setShow(false)}>
        Some Modal
      </div>
    </Show>
  );
}

export default Directives;
