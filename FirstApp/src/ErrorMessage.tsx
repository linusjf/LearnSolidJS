import { ErrorBoundary } from "solid-js";

const Broken = (props: any) => {
  throw new Error("Oh No");
  return <>Never getting here</>;
};

function ErrorMessage() {
  return (
    <>
      <div>Before</div>
      <ErrorBoundary fallback={(err) => err}>
        <Broken />
      </ErrorBoundary>
      <div>After</div>
    </>
  );
}

export default ErrorMessage;
