/* eslint no-unused-vars: 0 */ // -->
import { JSXElement, createSignal } from "solid-js";
import { For } from "solid-js";
import { Index } from "solid-js";

interface Cat {
  id: string;
  name: string;
}

/** @returns {JSXElement} JSX elements with a list of cat videos */
function Cats() {
  const [cats, setCats] = createSignal<Array<Cat>>([
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" }
  ]);

  return (
    <>
      <ol>
        <For each={cats()}>
          {(cat, i) => (
            <li>
              <a
                target="_blank"
                href={`https://www.youtube.com/watch?v=${cat.id}`}
              >
                {i() + 1}: {cat.name}
              </a>
            </li>
          )}
        </For>
      </ol>
      <ul>
        <Index each={cats()}>
          {(cat, i) => (
            <li>
              <a
                target="_blank"
                href={`https://www.youtube.com/watch?v=${cat().id}`}
              >
                {i + 1}: {cat().name}
              </a>
            </li>
          )}
        </Index>
      </ul>
    </>
  );
}

export default Cats;
