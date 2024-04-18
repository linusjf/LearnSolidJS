import {createSignal} from "solid-js";

function ButtonCounter () {
const [count, setCount] = createSignal<number>(0);


  return (<><button onClick={() => setCount(count() + 1)}>Click Me</button>
    <div>Count : {count()}</div></>);
}

export default ButtonCounter;
