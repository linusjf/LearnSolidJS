import { onCleanup } from "solid-js";

/**
 *
 * @param el
 * @param accessor
 */
export default function ClickOutside(
  el: HTMLDivElement,
  accessor: () => () => boolean
) {
  const onClick = (e: UIEvent) =>
    !el.contains(e.target as Node) && accessor()?.();
  document.body.addEventListener("click", onClick);
  onCleanup(() => document.body.removeEventListener("click", onClick));
}
