import {createSignal} from "solid-js";
import {createMemo} from "solid-js";

function fibonacci(num: number): number {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function FibCounter () {
const [count, setCount] = createSignal<number>(0);

const fib = createMemo(() => {
  const cnt = count();
  console.log("Calculating Fibonacci: " + cnt);
  return fibonacci(cnt);
});

return <>
  <button onClick={() => setCount(count() + 1)}>Click me!</button>
  <div>1. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
  <div>2. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
  <div>3. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
  <div>4. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
  <div>5. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
  </>
}

export default FibCounter;
