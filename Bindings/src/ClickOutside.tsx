import { JSXElement, onCleanup } from "solid-js";

export default function ClickOutside(
  el: HTMLDivElement,
  accessor: () => () => boolean
) {
  const onClick = (e: UIEvent) =>
    !el.contains(e.target as Node) && accessor()?.();
  document.body.addEventListener("click", onClick);
  onCleanup(() => document.body.removeEventListener("click", onClick));
}
