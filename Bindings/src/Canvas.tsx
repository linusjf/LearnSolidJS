import "./styles.css";

export default function Canvas(props: Record<string, any>) {
  return <canvas ref={props.ref} width="256" height="256" />;
}
