import { mergeProps } from "solid-js";
import { JsxElement } from "typescript";

/**
 * @returns {JsxElement} Greeting
 * @param {Record<string,any>} props Props data
 */
export default function Greeting(props: Record<string, any>) {
  const merged = mergeProps({ greeting: "Hi", name: "John" }, props);
  return (
    <h3>
      {merged.greeting} {merged.name}
    </h3>
  );
}
