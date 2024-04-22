import { JSXElement } from "solid-js";
import Info from "./Info";

const pkg: Record<string, any> = {
  name: "solid-js",
  version: 1,
  speed: "⚡️",
  website: "https://solidjs.com"
};

/** @returns {JSXElement} the info about the package */
export default function Spreads(): JSXElement {
  return <Info {...pkg} />;
}
