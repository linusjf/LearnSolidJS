import { ErrorBoundary } from "solid-js";
/* eslint no-unused-vars: 0 */ // -->
/* eslint no-unreachable: 0 */ // -->
const Broken = (props: Record<string, any>) => {
  throw new Error("Oh No");
  return <>Never getting here</>;
};

function ErrorMessage() {
  return (
    <>
      <div>Before</div>
      <ErrorBoundary
        fallback={(err, reset) => (
          <div onClick={reset}>Error: {err.toString()}</div>
        )}
      >
        <Broken />
      </ErrorBoundary>
      <ErrorBoundary fallback={(err) => err}>
        <Broken />
      </ErrorBoundary>
      <div>After</div>
    </>
  );
}

export default ErrorMessage;
