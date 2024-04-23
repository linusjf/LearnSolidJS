import { JSXElement, splitProps } from "solid-js";

/**
 * @returns {JSXElement} h3 greeting
 * @param {Record<string, any>} props the object from which the greeting and name are to be extracted
 */
export default function SplitGreeting(props: Record<string, any>): JSXElement {
  const [local, others] = splitProps(props, ["greeting", "name"]);
  return (
    <h3 {...others}>
      {local.greeting} {local.name}
    </h3>
  );
}
