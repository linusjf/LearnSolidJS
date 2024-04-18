import {createSignal} from "solid-js";

const [count, setCount] = createSignal<number>(0);

setInterval(() => setCount(c => c + 1), 1000);

function Counter () {
  return <div>Count : {count()}</div>;
}

export default Counter;
