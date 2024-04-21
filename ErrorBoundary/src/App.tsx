import { ErrorBoundary } from "solid-js";
/* eslint no-unused-vars: 0 */ // -->
/* eslint no-unreachable: 0 */ // -->
const Broken = (props: Record<string, any>) => {
  throw new Error("Oh No");
  return <>Never Getting Here</>;
};

function App() {
  return (
    <>
      <div>Before</div>
      <ErrorBoundary fallback={(err) => err}>
        <Broken />{" "}
      </ErrorBoundary>
      <div>After</div>{" "}
    </>
  );
}

export default App;
