/* eslint no-unused-vars: 0 */ // -->
import { createSignal, JSXElement, Show } from "solid-js";
import clickOutside from "./ClickOutside";
import "./styles.css";

declare module "solid-js/jsx-runtime" {
  namespace JSX {
    interface Directives {
      clickOutside: (el: HTMLDivElement, accessor: () => () => boolean) => void; // `any` should finally be replaced with the proper type, of course
    }
  }
}

/**
 * @returns {JSXElement} Show of Modal Popup
 */
function Directives() {
  const [show, setShow] = createSignal(false);
  return (
    <Show
      when={show()}
      fallback={<button onClick={() => setShow(true)}>Open Modal</button>}
    >
      <div class="modal" use:clickOutside={() => setShow(false)}>
        Some Modal
      </div>
    </Show>
  );
}

export default Directives;
