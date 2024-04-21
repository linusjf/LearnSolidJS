import Info from "./Info";

const pkg = {
  name: "solid-js",
  version: 1,
  speed: "⚡️",
  website: "https://solidjs.com"
};

export default function Spreads() {
  return <Info {...pkg} />;
}
