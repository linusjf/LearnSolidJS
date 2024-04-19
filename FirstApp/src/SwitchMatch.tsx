import { createSignal } from "solid-js";
import { Switch } from "solid-js";
import { Match } from "solid-js";

function SwitchMatch() {
  const [x] = createSignal(7);

  return (
    <>
      <Switch fallback={<p>{x()} is between 5 and 10</p>}>
        <Match when={x() > 10}>
          <p>{x()} is greater than 10</p>
        </Match>
        <Match when={5 > x()}>
          <p>{x()} is less than 5</p>
        </Match>
      </Switch>
    </>
  );
}

export default SwitchMatch;
