import {
  createEffect,
  children,
  JSXElement,
  PropsWithChildren
} from "solid-js";

type ColorProps = {
  name: "color";
};
/**
 * @returns {JSXElement} ColoredList
 * @param {PropsWithChildren<ColorProps>} props Props data
 */
export default function ColoredList(
  props: PropsWithChildren<ColorProps>
): JSXElement {
  const c = children(() => props.children);
  createEffect(() =>
    c()!.forEach((item: JSXElement) => (item.style.color = props.color))
  );
  return <>{c()}</>;
}
