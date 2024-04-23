import { JsxElement } from "typescript";
import "./styles.css";

/**
 * @returns {JsxElement} canvas element
 * @param {Record<string,any>} props properties passed to component
 */
export default function Canvas(props: Record<string, any>) {
  return <canvas ref={props.ref} width="256" height="256" />;
}
