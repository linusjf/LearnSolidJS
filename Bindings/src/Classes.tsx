import { createSignal } from "solid-js";
import "./styles.css";

function Classes() {
  const [current, setCurrent] = createSignal("foo");

  return (
    <>
      <button
        classList={{ selected: current() === "foo" }}
        onClick={() => setCurrent("foo")}
      >
        Foo
      </button>
      <button
        classList={{ selected: current() === "bar" }}
        onClick={() => setCurrent("bar")}
      >
        Bar
      </button>
      <button
        classList={{ selected: current() === "baz" }}
        onClick={() => setCurrent("baz")}
      >
        Baz
      </button>
    </>
  );
}

export default Classes;
