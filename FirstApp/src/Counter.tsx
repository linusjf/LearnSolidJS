import {createSignal} from "solid-js";

function Counter () {
const [count, setCount] = createSignal<number>(0);

const doubleCount = () => count() * 2;

setInterval(() => setCount(c => c + 1), 1000);

return <><div>Count : {count()}</div>
  <div>Double count: {doubleCount()}</div></>
    ;
}

export default Counter;
