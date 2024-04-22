import { JSXElement, createSignal, onCleanup } from "solid-js";

/**
 * @returns {JSXElement} Animated text
 */
function Styles(): JSXElement {
  const [num, setNum] = createSignal<number>(0);

  const timer = setInterval(() => setNum((num() + 1) % 255), 30);
  onCleanup(() => clearInterval(timer));
  return (
    <div
      style={{
        color: `rgb(${num()}, 180, ${num()})`,
        "font-weight": 1000,
        "font-size": `${num()}px`
      }}
    >
      Animated Text
    </div>
  );
}

export default Styles;
