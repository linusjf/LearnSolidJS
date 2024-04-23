import { JSXElement } from "solid-js";

/**
 * @returns {JSXElement} returns para containing package info
 * @param {Record<string,any>} props object
 */
export default function Info(props: Record<string, any>) {
  return (
    <p>
      The <code>{props.name}</code> package is {props.speed} fast. Download
      version {props.version} from{" "}
      <a href={`https://www.npmjs.com/package/${props.name}`}>npm</a> and{" "}
      <a href={props.website}>learn more here</a>
    </p>
  );
}
