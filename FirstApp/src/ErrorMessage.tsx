import { ErrorBoundary } from "solid-js";

const Broken = (props: any) => {
  throw new Error("Oh No");
  return <>Never getting here</>;
};

function ErrorMessage() {
  return (
    <ErrorBoundary fallback={(err) => <p>{err}</p>}>
      <Broken />
    </ErrorBoundary>
  );
}

export default ErrorMessage;
