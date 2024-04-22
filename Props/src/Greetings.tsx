import { mergeProps } from "solid-js";

/**
 *
 * @param props
 */
export default function Greeting(props: Record<string, any>) {
  const merged = mergeProps({ greeting: "Hi", name: "John" }, props);
  return (
    <h3>
      {merged.greeting} {merged.name}
    </h3>
  );
}
