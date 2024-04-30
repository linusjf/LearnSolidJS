import {
  createEffect,
  children,
  JSXElement,
  PropsWithChildren
} from "solid-js";

/**
 * @returns {JSXElement} ColoredList
 * @param {PropsWithChildren<any>} props Props data
 */
export default function ColoredList(props: PropsWithChildren<any>): JSXElement {
  const c: any = children(() => props.children);
  createEffect(() => {
    const val = c();
    if (Array.isArray(val))
      val!.forEach((item: JSXElement) => {
        item.style.color = props.color;
      });
  });
  return <>{c()}</>;
}
